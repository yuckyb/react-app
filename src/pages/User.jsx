import '../assets/css/user.css'
import React, { Component } from 'react';
import { List } from 'antd-mobile';
class User extends Component {
   render() {
       return (
           <div style={{background:'#f5f5f5',height:'100%'}}>
               <div className="header">
                    <div className="imgUrl"></div>
                    <div className="login">
                        <p className="fs24">
                            登录/注册
                        </p>
                        <p style={{margin:'5px 0'}}>登陆后享受更多权益</p>
                    </div>
               </div>
                <div className='maininfo flex-aijc' style={{background:'#fff'}}>
                    <p>
                        <i className="iconfont icon-qian" style={{color:"#fa8e13"}}></i>
                        钱包
                    </p>
                    <p style={{border:'1px solid #f5f5f5'}}>
                        <i className="iconfont icon-hongbao" style={{color:"#f9523a"}}></i>
                        红包
                    </p>
                    <p>
                        <i className="iconfont icon-jinbi" style={{color:"#65bc17"}}></i>
                        金币
                    </p>
                </div>
                <div className="profile-1reTe fs24" style={{marginTop:'10px'}}>
                    <List>
                        <List.Item  arrow="horizontal">
                            <i className="iconfont icon-map-marker-radius"></i>
                            <span style={{ marginLeft: 12 }}>我的地址</span>
                        </List.Item>
                    </List>
                </div>
                <div className="profile-1reTe fs24" style={{marginTop:'10px'}}>
                    <List>
                        <List.Item  arrow="horizontal">
                            <i className="iconfont icon-jinbishangcheng1" style={{color:"#8dd545"}}></i>
                            <span style={{ marginLeft: 12 }}>金币商城</span>
                        </List.Item>
                        <List.Item  arrow="horizontal">
                            <i className="iconfont icon-gift" style={{color:"#f66f4d"}}></i>
                            <span style={{ marginLeft: 12 }}>分享拿10元现金</span>
                        </List.Item>
                    </List>
                </div>
                <div className="profile-1reTe fs24" style={{marginTop:'10px'}}>
                    <List>
                        <List.Item  arrow="horizontal">
                            <i className="iconfont icon-kefu"></i>
                            <span style={{ marginLeft: 12 }}>我的客服</span>
                        </List.Item>
                        <List.Item  arrow="horizontal">
                            <i className="iconfont icon-changyonglogo40" style={{background:'#46a4fe',color:'#fff',borderRadius:'5px'}}></i>
                            <span style={{ marginLeft: 12 }}>下载饿了么APP</span>
                        </List.Item>
                    </List>
                </div>
           </div>
       );
   }
}
export default User;

