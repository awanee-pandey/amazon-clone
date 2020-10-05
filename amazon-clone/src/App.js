import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import Home from './Home';
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from './Orders'

import  { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {auth} from "./firebase";
import {useStateValue} from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';



const promise=loadStripe("pk_test_51HQ1tgIviXWHJQ9uSOqWvAN3QzteU4QPvmTv4nX1T2dcu7T77KOH2sKZZDnEdpVHoejbk3rCrvk5o8uAHj5iJ2r200w1R6WqlB")

function App() {

  const[{},dispatch] = useStateValue();

  useEffect(()=>{
    //will only run once when the app components loads...
    auth.onAuthStateChanged(authUser=>{
      console.log('THE USER IS >>>',authUser);

      if(authUser){
        //The user just logged in
        dispatch(
          {
            type:'SET_USER',
            user:authUser
          })

      }else{
        //user is logges out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }

    })
  },[])
  return (
    //BEM convention
    <Router>
      <div className="App">
   
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
        
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
           
          </Route> 

          <Route path="/orders">
            <Header />
            <Orders />
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