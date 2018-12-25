import React, { Component } from 'react';
class TabsTemp extends Component {
    clickTab(id){
        console.log(id,'参数')
    }
    state={
        list:[
            {title:'综合排序',id:0},
            {title:'距离最近',id:1},
            {title:'品质联盟',id:2},
            {title:'筛选',id:3},
        ]
    }
  render() {
      let tabs={
          display: 'flex', 
          justifyContent: 'center',
          width:'100%',
          height:'40px',
          lineHeight:'40px',
          borderBottom:'1px solid #ddd'
      }
      let tabstyle={
        width:'25%',
        textAlign: 'center',
      }
    return (
        <div style={tabs}>
            {
                this.state.list.map(item=>{
                    return (
                        <div key={item.id} style={tabstyle} onClick={() => this.clickTab(item.id)}>{item.title}</div>
                    )
                })
            }
      

        </div>
    );
  }
}

export default TabsTemp;