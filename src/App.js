/*
   App 应用总容器
*/
import React, { Component } from 'react';
import './App.css'
import 'antd-mobile/dist/antd-mobile.css';
class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default App;
