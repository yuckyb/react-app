import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import "../assets/css/tabNav.css";
class TabNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab",
      hidden: false,
      fullScreen: false
    };
  }
  render() {
    return (
      <div>
        <div style={{ height: 60 }} />
        <div className="tab-bar-nav">
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="首页"
              key="首页"
              icon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
                  }}
                />
              }
              selected={this.state.selectedTab === "blueTab"}
              onPress={() => {
                console.log(this.props,'222222222')
                this.setState({
                  selectedTab: "blueTab"
                });
              }}
              data-seed="logId"
            />
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat"
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat"
                  }}
                />
              }
              title="发现"
              key="发现"
              selected={this.state.selectedTab === "redTab"}
              onPress={() => {
                this.setState({
                  selectedTab: "redTab"
                });
              }}
              data-seed="logId1"
            />
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat"
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"
                  }}
                />
              }
              title="订单"
              key="订单"
              selected={this.state.selectedTab === "greenTab"}
              onPress={() => {
                this.setState({
                  selectedTab: "greenTab"
                });
              }}
            />
            <TabBar.Item
              icon={{
                uri:
                  "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"
              }}
              selectedIcon={{
                uri:
                  "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"
              }}
              title="我的"
              key="我的"
              selected={this.state.selectedTab === "yellowTab"}
              onPress={() => {
                this.setState({
                  selectedTab: "yellowTab"
                });
              }}
            />
          </TabBar>
        </div>
      </div>
    );
  }
}

export default TabNav;
