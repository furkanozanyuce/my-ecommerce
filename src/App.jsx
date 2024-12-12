import { Switch, Route } from 'react-router-dom'
import './App.css'
import "./index.css"
import HomePage from "./pages/HomePage"
import ShopPage from './pages/ShopPage'
import SignupForm from './pages/SignupForm'
import LoginForm from './pages/LoginForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
      </Switch>
      <ToastContainer />
    </div>
  )
}

export default App
