import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
 
import App from './../App';
import Login from '../components/Login';
import Index from '../pages/Index'

  
const Root = () => (
   <div>
      <App>
         <Switch >
            <Route path="/" exact component={Index} />
            <Route path="/Login" component={Login} />
            <Route render={() => <Redirect to="/" />} />
         </Switch>
      </App>
   </div>
);
 
export default Root;
