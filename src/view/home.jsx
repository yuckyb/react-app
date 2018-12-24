import React, { Component } from 'react';
import TabNav from '../components/tabNav/tabBar';
import GridNav from '../components/grid/grid';
import './home.css'
class home extends Component {
   render() {
      return (
         <div id="home-container">
            <header>上海市</header>
            <div className="search-wrapper">
               <div className='search-value'>搜索饿了么商家、商户名称</div>
            </div>
            <GridNav/>
            <div className="activity-logo">
               <div className="activity-item">
                     <h3>品质套餐</h3>
               </div>
            </div>
            <TabNav/>
         </div>
      );
   }

}

export default home;

