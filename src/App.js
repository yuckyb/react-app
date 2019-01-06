/*
   App 应用总容器
*/
import React, { Component } from 'react';
import TabListBar from './components/TabListBar';
import './App.css'
import 'antd-mobile/dist/antd-mobile.css';
class App extends Component {
    render() {
        return (
            <div>
                <TabListBar/>
            </div>
        )
    }
}
export default App;
