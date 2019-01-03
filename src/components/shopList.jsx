import React, { Component } from 'react';
import '../assets/css/shoplist.css'
class ShopList extends Component {
    clickTab(id){
        console.log(id,'参数')
    }
    state={
        list:[
            {title:'综合排序',id:0},
            {title:'距离最近',id:1},
            {title:'品质联盟',id:2},
            {title:'筛选',id:3},
        ]
    }
  render() {
    return (
        <ul className='shop-list'>
            <li>
                <div className="shop-logo">
                    <img src="https://fuss10.elemecdn.com/7/1b/f7ff8902cb535888b41365cee9889jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt=""/>
                </div>
                <div className="shopContet">
                    <h3>淮南牛肉汤特色锅贴</h3>
                    <div className="order-number">月售9999单</div>
                    <div className="user-notice clearfix">
                        <div className="user-notice-left fl">￥15起送|配送费￥0.8</div>
                        <div className='user-notice-right fr'>950m|32分钟</div>
                    </div>
                    <div className="tags">
                        <span>简餐</span>
                        <span>品质联盟</span>
                        <span>地方小吃</span>
                    </div>
                    <ul className="active-tag">
                        <li><span>首</span>新用户下单立减50</li>
                    </ul>
                </div>
            </li>
            <li>
                <div className="shop-logo">
                    <img src="https://fuss10.elemecdn.com/7/1b/f7ff8902cb535888b41365cee9889jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt=""/>
                </div>
                <div className="shopContet">
                    <h3>淮南牛肉汤特色锅贴</h3>
                    <div className="order-number">月售9999单</div>
                    <div className="user-notice clearfix">
                        <div className="user-notice-left fl">￥15起送|配送费￥0.8</div>
                        <div className='user-notice-right fr'>950m|32分钟</div>
                    </div>
                    <div className="tags">
                        <span>简餐</span>
                        <span>品质联盟</span>
                        <span>地方小吃</span>
                    </div>
                    <ul className="active-tag">
                        <li><span>首</span>新用户下单立减50</li>
                    </ul>
                </div>
            </li>
        </ul>
    );
  }
}

export default ShopList;