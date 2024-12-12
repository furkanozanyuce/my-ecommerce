import { Switch, Route } from 'react-router-dom'
import './App.css'
import "./index.css"
import HomePage from "./pages/HomePage"
import ShopPage from './pages/ShopPage'
import SignupForm from './pages/SignupForm'

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
      </Switch>
    </div>
  )
}

export default App
