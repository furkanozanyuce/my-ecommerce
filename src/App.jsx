import { Switch, Route } from 'react-router-dom'
import './App.css'
import "./index.css"
import HomePage from "./pages/HomePage"
import ShopPage from './pages/ShopPage'
import SignupForm from './pages/SignupForm'
import LoginForm from './pages/LoginForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/actions/clientActions'
import { fetchCategories, fetchProductList } from './redux/actions/productActions';
import axios from 'axios'
import ProductDetailPage from './pages/ProductDetailPage'
import ShoppingCartPage from './pages/ShoppingCartPage'
import CreateOrderPage from './pages/CreateOrderPage'
import PrivateRoute from './components/PrivateRoute'
import OrderSuccessPage from './pages/OrderSuccessPage'
import PreviousOrdersPage from './pages/PreviousOrdersPage'
import ProfilePage from './pages/ProfilePage'
import TeamsPage from './pages/TeamsPage'

const axiosInstance = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);

  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // No token => no user => done loading
      setAuthLoading(false);
      return;
    }

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
      } finally {
        setAuthLoading(false);
      }
    };

    verifyToken();
  }, [dispatch]);


  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProductList());
  }, [dispatch]);

  if (authLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Verifying token...</p>
      </div>
    );
  }

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
        <Route path="/teams">
          <TeamsPage />
        </Route>
        <PrivateRoute path="/create-order" component={CreateOrderPage} />
        <PrivateRoute path="/order-success" component={OrderSuccessPage} />
        <PrivateRoute path="/orders" component={PreviousOrdersPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
      </Switch>
      <ToastContainer />
    </div>
  )
}

export default App
