import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import './App.css';

import ShopPage from "./Pages/shop/shop.component";
import CheckoutPage from "./Pages/checkout/checkout-page.component";

import Header from "./Components/header/header.component";
import Homepage from "./Pages/homepage/homepage.component";
import SignInSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./Firebase/firebase.utils";
import CurrentUserContext from "./Context/User/user.context";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount()
  {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth)
        {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapshot => {
            this.setState({
              currentUser: { id: snapshot.id, ...snapshot.data() }
            });
          });
        }
        else
        {
          this.setState({currentUser: userAuth});
        }
      });
  }
    
  componentDidUnMount()
  {
      this.unsubscribeFromAuth();
  }

  render()
  {
    return(
      <div>
        {/* To Pass the Dynamic state we use .Provider and Pass Components as childrens that want to use it */}
        <CurrentUserContext.Provider value={this.state.currentUser} >
          <Header />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to="/" />) : (<SignInSignUp />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
