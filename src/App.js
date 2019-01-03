/*
   App 应用总容器
*/
import React, { Component } from 'react';
import TabNav from './components/tabBar';
class App extends Component {
    render() {
        // return <div>{this.props.children}</div>;
        return (
            <TabNav/>
        )
    }
}
export default App;
