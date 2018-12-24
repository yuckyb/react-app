import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
 
import App from './../App';
 
import home from '../view/home';
import user from '../view/user';
import order from '../view/order';
  
const Root = () => (
   <div>
      <Switch>
         <Route
            path="/"
            render={props => (
               <App>
                  <Switch>
                    <Route path="/" exact component={home} />
                    <Route path="/home" component={home} />
                    <Route path="/user" component={user} />
                    <Route path="/order/:id" component={order} />
                    <Route render={() => <Redirect to="/" />} />
                  </Switch>
               </App>
            )}
         />
      </Switch>
   </div>
);
 
export default Root;
