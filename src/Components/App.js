import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, withRouter, Switch } from 'react-router-dom';
import AddCompany from './Content/AddCompany';
import SelectCompany from './Content/SelectCompany';
import AddInvoice from './Content/AddInvoice';
import SelectInvoice from './Content/SelectInvoice';
import AddSerial from './Content/AddSerial';


import LinearProgress from '@material-ui/core/LinearProgress';

import Login from './OtherLayout/Login';
// import Route from './Route';

import firebase from '../../Firebase';



class App extends Component {
   constructor(props) {
    super(props);
   this.state = {
   	isLoading: true,
    user: null
  }
}

 componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("Login Successfull");
        console.log(user.email);
        //window.localStorage.setItem('user', JSON.stringify(user))
        this.setState({
          isLoading: false,
          user: user
        });
      } else {
        console.log("Login Failed");
        //window.localStorage.removeItem('user')
        this.setState({
          isLoading: false,
          user: null
        });
      }
    });
}


 render() {
   const ProtectedRoute = ({ component: Component, user, ...rest }) => (
		  <Route {...rest} render={(props) => (
		    user ? <Component {...props} {...rest} /> : <Redirect to='/login' />
		  )} />
		)

    if(this.state.isLoading){
    return(
        <LinearProgress />
      )
    }

	if(this.state.user == null) {
	   return <Router>
	       <div>
	          <ProtectedRoute user={this.state.user} exact={true} path='/' component={AddCompany} />
	          <ProtectedRoute user={this.state.user} exact={true} path='/select-company' component={SelectCompany} />
	          <ProtectedRoute user={this.state.user} exact={true} path='/search-serial' component={SelectCompany} />
	          <ProtectedRoute user={this.state.user} exact={true} path='/add-invoice/:compkey' component={AddInvoice} />
	          <ProtectedRoute user={this.state.user} path='/:compkey/select-invoice' component={SelectCompany} />
	          <ProtectedRoute user={this.state.user} path='/:compkey/:invkey/add-serial' component={AddSerial} />
	          <Route path='/login' component={Login} />    
	        </div>
	     </Router>; 
	}


	if(this.state.user != null) {
	   return <Router>
	   <div>
	      <Switch>
	       	  <Route exact={true} path='/' component={AddCompany} />
	          <Route exact={true} path='/select-company' component={SelectCompany} />
	          <Route exact={true} path='/search-serial' component={SelectCompany} />
	          <Route exact={true} path='/add-invoice/:compkey' component={AddInvoice} />
	          <Route path='/:compkey/search-invoice/' component={SelectCompany} />
	          <Route path='/:compkey/:invkey/add-serial' component={AddSerial} />
	          <Redirect from="/login" to="/" />
	       </Switch>
      </div>
    </Router>;
	    }
    
    

    
 }

}

export default App;
