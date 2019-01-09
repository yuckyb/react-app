import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../assets/css/Login.css";
import { Toast } from 'antd-mobile';
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            phone:'',
            code:''
        }
    }
    submitBtn=(e)=>{
        e.preventDefault();
        if(!this.state.phone ){
            Toast.fail('请输入手机号!!!', 1);
        }else
        if(!this.state.code){
            Toast.fail('请输入验证码!!!', 1);
        }else{
            console.log('登录成功')
        }
        console.log(this.state.phone,this.state.code)
    }

      
    handPhone=(e)=>{
        this.setState({
            phone:e.target.value
        })
    }
    handCode=(e)=>{
        this.setState({
            code:e.target.value
        })
    }
  render() {
      const styleButton={
        width: '100%',
        height: '42px',
        marginTop: '30px',
        borderRadius: '4px',
        background: '#4cd96f',
        color: '#fff',
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: '16px',
        lineHeight:' 42px',
      }
    return (
      <div style={{ padding: "50px" }} className="login">
      <form onSubmit={this.submitBtn}>
        <p style={{ position: "relative" }}>
          <input type="text" placeholder="手机号" maxLength="11"  value={this.state.phone} onChange={this.handPhone} />
          <button
            style={{
              position: "absolute",
              top: "4px",
              right: "5px",
              height: "40px",
              background: "none",
              color: "#333"
            }}
          >
            获取验证码
          </button>
        </p>
        <p style={{ marginTop: "10px" }}>
          <input type="text" placeholder="验证码" maxLength="6"  value={this.state.code} onChange={this.handCode} />
        </p>

        <p style={{ marginTop: "10px" }}>
          新用户登录即自动注册，并表示已同意<span style={{color:'#2395ff',lineHeight:'20px'}}>《用户服务协议》</span>
        </p>
        <button type="submit" style={styleButton}>登录</button>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
