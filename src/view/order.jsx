import React, { Component } from 'react';
class order extends Component {
   render() {
       return (
           <h3>Message{this.props.match.params.id}</h3>
       );
   }
}
 
export default order;
