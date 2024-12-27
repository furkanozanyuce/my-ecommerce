import { Switch, Route } from 'react-router-dom'
import './App.css'
import "./index.css"
import HomePage from "./pages/HomePage"
import ShopPage from './pages/ShopPage'
import SignupForm from './pages/SignupForm'
import LoginForm from './pages/LoginForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from './redux/actions/clientActions'
import { fetchCategories } from './redux/actions/productActions';
import { fetchProductList } from './redux/actions/productActions'
import axios from 'axios'
import ProductDetailPage from './pages/ProductDetailPage'
import ShoppingCartPage from './pages/ShoppingCartPage'
import PrivateRoute from './components/PrivateRoute'
import CreateOrderPage from './pages/CreateOrderPage'

const axiosInstance = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    axiosInstance.defaults.headers.common['Authorization'] = token;

    const verifyToken = async () => {
      try {
        const response = await axiosInstance.get('/verify');
        const userData = response.data;

        dispatch(setUser(userData));

        if (userData.token) {
          localStorage.setItem('token', userData.token);
          axiosInstance.defaults.headers.common['Authorization'] = userData.token;
        }
      } catch (error) {
        console.error('Token verification failed:', error);
        localStorage.removeItem('token');
        delete axiosInstance.defaults.headers.common['Authorization'];
      }
    };

    verifyToken();
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProductList());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId">
          <ProductDetailPage />
        </Route>
        <Route path="/shop/:gender/:categoryName/:categoryId">
          <ShopPage />
        </Route>
        <Route path="/shop/:gender/:categoryName">
          <ShopPage />
        </Route>
        <Route path="/shop/:gender">
          <ShopPage />
        </Route>
        <Route path="/shop" exact>
          <ShopPage />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/cart">
          <ShoppingCartPage />
        </Route>
        <PrivateRoute path="/create-order" component={CreateOrderPage} />
      </Switch>
      <ToastContainer />
    </div>
  )
}

export default App
