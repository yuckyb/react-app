import React, { Component } from "react";
import noOrder from "../../assets/images/order1-1.png";
import { Button } from "antd-mobile";
import Orderlist from "./Orderlist"
class order extends Component {
  constructor(props){
    super(props);
    this.state={loginStatus:false}
  }
  render() {
    if(this.state.loginStatus){
      return (
        <div style={{ height: "100%" }}>
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
    }else{
      return  <Orderlist/>
    }

  }
}
export default order;
