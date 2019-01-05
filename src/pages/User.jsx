import '../assets/css/user.css'
import React, { Component } from 'react';
class User extends Component {
   render() {
       return (
           <div>
               <div className="header">
                    <div className="imgUrl"></div>
                    <div className="login">
                        <p className="fs24">
                            登录/注册
                        </p>
                        <p style={{margin:'5px 0'}}>登陆后享受更多权益</p>
                    </div>
               </div>
                <div className='maininfo flex-aijc'>
                    {/* <p>
                        <icon/>
                        钱包
                    </p>
                    <p>
                        <icon/>
                        红包
                    </p>
                    <p>
                        <icon/>
                        金币
                    </p> */}
                </div>
               我的页面
           </div>
       );
   }
}
export default User;

