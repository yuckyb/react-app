import React, { Component } from 'react';
import GridNav from '../components/grid';
import CarouselNav from '../components/carouser';
import TabExample from '../components/tabs';
import ShopList from '../components/shopList';
import './home.css'
class Home extends Component {
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
                     <div className="laber">搭配齐全吃得好</div>
                     <p>立即抢购></p>
                     <img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt=""/>
               </div>
               <div className="activity-item">
                     <h3>品质套餐</h3>
                     <div className="laber">搭配齐全吃得好</div>
                     <p>9999人正在抢购></p>
                     <img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt=""/>
               </div>
            </div>
            <div  style={{padding:'2%'}}>
               <CarouselNav/>
            </div>
            <div className="classified-title">
               <div className="classified-title-boder"></div>
               <div className="classified-content">商家推荐</div>
               <div className="classified-title-boder"></div>
            </div>
            <TabExample/>
            <ShopList/>
         </div>
      );
   }

}

export default Home;

