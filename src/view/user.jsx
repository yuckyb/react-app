 
/*
   Test 主页
*/
import React, { Component } from 'react';
import TabNav from '../components/tabBar';
class user extends Component {
   render() {
       return (
           <div id="test-container">
                    {/* 我的页面 return <Redirect to={{ pathname: "/user" }} />; */}
               {/* <p>search:{this.props.location.search} </p>
               <p>state:{this.props.location.state.mold} </p>
               <div onClick={() =>  this.props.history.goBack()}>返回上一页</div>
               <div onClick={() => this.props.history.push('/order/12')}>message页面</div> */}
                  <TabNav/>
           </div>
       );
   }
}
export default user;

