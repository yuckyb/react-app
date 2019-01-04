/*
   App 应用总容器
*/
import React, { Component } from 'react';
import TabListBar from './components/TabListBar';
import './App.css'
class App extends Component {
    render() {
        return (
            <div>
                {/* <div>{this.props.children}</div> */}
                <TabListBar/>
            </div>
        )
    }
}
export default App;
