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
            <div style={{paddingTop:'10px'}}>
               <GridNav/>
            </div>
            {/* <div className="activity-logo">
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
            </div> */}
            <div style={{padding:'10px 2%'}}>
               <h3>优惠专区</h3>
            </div>
            <div className="justifySpaceBetween" style={{padding:'0 2% 10px 2%'}}>
               <div  style={{width:'49%',background:'#9a7968'}} className="borderRadius5 flexDirectionColumn alignItems">
                  <div style={{padding:'3px 15px',borderRadius:'0 0 5px 5px',color:'#fff', background:' linear-gradient(#ed7a3b,#e55532)'}}>限时秒杀</div>
                  <div className="borderRadius5" style={{width:"90%",background:'#fff',textAlign:'center',padding:'5px 0',margin:'80px 0 15px 0'}}>
                     <h4>午餐8.9起</h4>
                     <p style={{color:'#e55846',lineHeight:'24px'}}>10点场<span>02</span>：<span>45</span>：<span>28</span></p>
                  </div>
               </div>
               <div  style={{width:'49%',background:'#9a7968'}} className="borderRadius5 flexDirectionColumn alignItems">
                  <div  style={{padding:'3px 15px',borderRadius:'0 0 5px 5px',color:'#fff', background:' linear-gradient(#71c2f9,#68abf1)'}}>高分店铺</div>
                  <div className="borderRadius5" style={{width:"90%",background:'#fff',textAlign:'center',padding:'5px 0',margin:'80px 0 15px 0'}}>
                     <h4>爆款美食</h4>
                     <p style={{color:'#666',lineHeight:'24px'}}>匠心精选 不止5折</p>
                  </div>
               </div>
            </div>
            <div className="alignItemsStretch tac" style={{padding:'0 2%',flex:'1'}}>
               <div  style={{flex:'1',borderRadius:'5px',background:'#fceee3',paddingTop:'10px',marginRight:'5px'}}>
                  <h4>高满减日</h4>
                  <p style={{fontSize:'12px',lineHeight:'20px'}}>满减23元起</p>
                  <img src="" alt=""/>
               </div>
               <div style={{flex:'1',borderRadius:'5px',background:'#fceee3',paddingTop:'10px',marginRight:'5px'}}>
                  <h4>高满减日</h4>
                  <p style={{fontSize:'12px',lineHeight:'20px'}}>满减23元起</p>
               </div>
               <div  style={{flex:'1',borderRadius:'5px',background:'#fceee3',paddingTop:'10px',marginRight:'5px'}}>
                  <h4>高满减日</h4>
                  <p style={{fontSize:'12px',lineHeight:'20px'}}>满减23元起</p>
               </div>
               <div  style={{flex:'1',borderRadius:'5px',background:'#fceee3',paddingTop:'10px'}}>
                  <h4>高满减日</h4>
                  <p style={{fontSize:'12px',lineHeight:'20px'}}>满减23元起</p>
               </div>
            </div>
            <div style={{padding:'10px 2%'}}>
               <h3>甄选推荐</h3>
            </div>
            <div className="justifySpaceBetween" style={{padding:'0 2% 10px 2%'}}>
               <div  style={{width:'49%',background:'#9a7968'}} className="borderRadius5 flexDirectionColumn alignItems">
                  <div style={{padding:'3px 15px',borderRadius:'0 0 5px 5px',color:'#fff', background:' linear-gradient(#ed7a3b,#e55532)'}}>限时秒杀</div>
                  <div className="borderRadius5" style={{width:"90%",background:'#fff',textAlign:'center',padding:'5px 0',margin:'80px 0 15px 0'}}>
                     <h4>午餐8.9起</h4>
                     <p style={{color:'#e55846',lineHeight:'24px'}}>10点场<span>02</span>：<span>45</span>：<span>28</span></p>
                  </div>
               </div>
               <div  style={{width:'49%',background:'#9a7968'}} className="borderRadius5 flexDirectionColumn alignItems">
                  <div  style={{padding:'3px 15px',borderRadius:'0 0 5px 5px',color:'#fff', background:' linear-gradient(#71c2f9,#68abf1)'}}>高分店铺</div>
                  <div className="borderRadius5" style={{width:"90%",background:'#fff',textAlign:'center',padding:'5px 0',margin:'80px 0 15px 0'}}>
                     <h4>爆款美食</h4>
                     <p style={{color:'#666',lineHeight:'24px'}}>匠心精选 不止5折</p>
                  </div>
               </div>
            </div>
            <div style={{padding:'1% 2%'}}>
               <CarouselNav/>
            </div>
            <div style={{padding:'10px 2% 0 2%'}}>
               <h3>推荐商家</h3>
            </div>
            {/* <div className="classified-title">
               <div className="classified-title-boder"></div>
               <div className="classified-content">商家推荐</div>
               <div className="classified-title-boder"></div>
            </div> */}
            <TabExample/>
            <ShopList/>
         </div>
      );
   }

}

export default Home;

