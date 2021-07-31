
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import Checkout from './components/Checkout/Checkout';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import AddProducts from './components/AddProducts/AddProducts';
import ManageProducts from './components/ManageProducts/ManageProducts';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
  
    <Router>
        {/* <Header/>
        <h3 className="mail">email: {loggedInUser.email}</h3> */}
      <Switch>
        <Route path="/home">
             <Home/>
            </Route>
        <Route path="/admin">
              <Admin/>
            </Route>
        <Route path="/deals">
              <Deals/>
            </Route>
        <Route path="/login">
              <LogIn/>
            </Route>
        <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/orders">
              <Orders/>
            </PrivateRoute>
            <PrivateRoute path="/checkout">
              <Checkout/>
            </PrivateRoute>
            <Route path="/addProducts">
              <AddProducts/>
            </Route>
            <Route path="/manageProducts">
              <ManageProducts/>
            </Route>
       </Switch>
       </Router>
       </UserContext.Provider>
   );
}

export default App;
