import { Grid } from 'antd-mobile';
import React, { Component } from 'react';
const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));
  
//   const GridExample = () => (
//     <div>
//       <div className="sub-title">Carousel</div>
//       <Grid data={data} isCarousel onClick={_el => console.log(_el)} />
//     </div>
//   );
class GridNav extends Component {
   render() {
     return (
        <div>
            <Grid data={data} isCarousel hasLine={false} columnNum={5} onClick={_el => console.log(_el)} />
        </div>
     );
   }
 }

 export default GridNav;

