import React, { Component } from 'react';
import '../assets/css/shoplist.css'
class ShopList extends Component {
    clickTab(id){
        console.log(id,'参数')
    }
    constructor(){
        super();
        this.state={
            shopImgStyle:{
                width: '20%',
                border:' 1px solid #f5f5f5',
                borderRadius:'4px',
            },
            shoplist:[
                {shopname:'KFC',labels:['简餐','品质联盟','地方小吃'],sell:'100',}
            ]
        }
    }
  
    state={
        list:[
            {title:'综合排序',id:0},
            {title:'距离最近',id:1},
            {title:'品质联盟',id:2},
            {title:'筛选',id:3},
        ],
        showBox:false
    }
    itemBox=()=>{
        this.setState({
            showBox:true
        })
    }
    handHate(e){
        e.stopPropagation();
        this.setState({
            showBox:false
        })
    }
    hideBox=()=>{
        this.setState({
            showBox:false
        })
    }
  render() {
    return (
        <ul className="orderList" style={{padding:'0'}}>
        <li className="pr">
          <img style={this.state.shopImgStyle}
            src="https://fuss10.elemecdn.com/7/1b/f7ff8902cb535888b41365cee9889jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
            alt=""
          />
          <div className='clearfix'
            style={{
              width: "78%",
              borderBottom: "1px solid #ddd"
            }}
          >
            <div style={{ justifyContent: "space-between", display: "flex" }}>
              <h4>肯德基宅急送（淮海中路店）</h4>
              <span onClick={this.itemBox}>⋮</span>
            </div>
            <div style={{ marginTop:'10px',color:'#666' }}>
              <span>月售35>￥100/人</span><span className="fr" style={{border:'1px solid #51a1ea',color:'#51a1ea',padding:'0 3px',borderRadius:'3px'}}>准时达蜂鸟专送</span>
            </div>
            <div style={{ marginTop:'5px',color:'#666'  }}>
              <span>起送￥20 远距离配送￥7.3</span><span className="fr">41分钟 3.1km</span>
            </div>
            <div style={{ padding:'10px 0 15px 0',color:'#666',justifyContent:'space-between',display:'flex' }}>
                <div className="tags fs12">
                    <span>简餐</span>
                    <span>品质联盟</span>
                    <span>地方小吃</span>
                </div>
                <span className="iconfont icon-down2"></span>
            </div>
          </div>
          <div>
        
          </div>
          {/* 不喜欢弹窗 */}
             {
              this.state.showBox?
                <div className="hateBox pa flex-aijc" onClick={this.hideBox}>
                    <span style={{backgroundColor:'#fff',borderRadius:"50%",width:'60px',height:'60px',display:'block',lineHeight:'60px',textAlign:'center'}} onClick={(e)=>this.handHate(e)}>不喜欢</span>
                </div>:''
            }
        </li>
      
      </ul>
    );
  }
}
export default ShopList;