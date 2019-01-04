import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
 
import App from './../App';
 
import Home from '../pages/Home';
import User from '../pages/User';
import Order from '../pages/Order';
  
const Root = () => (
   <div>
      <App>
         <Switch >
            <Route path="/" exact component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/User" component={User} />
            <Route path="/Order/:id" component={Order} />
            <Route render={() => <Redirect to="/" />} />
         </Switch>
      </App>
   </div>
);
 
export default Root;
