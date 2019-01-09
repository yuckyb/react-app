import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import TabListBar from '../components/TabListBar';
class Index extends Component{
    render(){
        return(
            <TabListBar/>
        )
    }
}
export default withRouter(Index)