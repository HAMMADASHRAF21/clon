import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth ,firebase } from './firebase';

function App() {
const [{user},dispatch] = useStateValue();

useEffect(() => {
  
  const unsubscribe =  firebase.auth().onAuthStateChanged((authUser)=> {

if(authUser)
{
//login
dispatch({
type: "SET_USER",
user:authUser,
});
}

else {
//logout
dispatch({
  type: "SET_USER",
  user:null
  });
}
})
return ()=> 
{
  //cleanup
  unsubscribe();
} ;

},[])

console.log("USeR IS",user);

  return (
    <Router>
    <div className="app">

      <Switch>
        <Route path="/checkout">
        <Header />
        <Checkout />
   
    </Route>

    <Route path="/login">
    <Login />
    </Route>
    <Route path="/">
    <Header />
    <Home />
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
