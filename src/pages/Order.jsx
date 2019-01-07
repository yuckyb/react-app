import React, { Component } from 'react';
import noOrder from '../assets/images/order1-1.png'
import { Button } from 'antd-mobile';
class order extends Component {
   render() {
       return (
        <div style={{background:'#f5f5f5',height:'100%'}}>
            {/* 未登录状态 */}
            <div className="noLogin flex-aijc tac fs24" style={{height:'100%'}}> 
                <div style={{display:'flex',flexDirection:"column"}}>
                <img src={noOrder} alt=""/>
                <p>登录后查看外卖订单</p>
                <Button type="primary" inline style={{ width:'180px',margin:'auto',marginTop: '10px', backgroundColor: '#56d176' }}>立即登录</Button>
                </div>
            </div>
        </div>
       );
   }
}
 
export default order;
