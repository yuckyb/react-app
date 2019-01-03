
import { Carousel } from 'antd-mobile';
import React, { Component } from 'react';
class CarouselNav extends Component {
  state = {
    data: [
        'https://fuss10.elemecdn.com/3/ff/2e59b7714daa70ef55add3a21377bjpeg.jpeg?imageMogr/format/webp/thumbnail/568x/',
        'https://fuss10.elemecdn.com/4/58/6898af2b1230eb5e193c4b2d15c56jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/',
        'https://fuss10.elemecdn.com/3/ff/2e59b7714daa70ef55add3a21377bjpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'
    ],
    imgHeight: 100,
  }

  render() {
    return (
        <Carousel
          autoplay={true}
          infinite
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}

export default CarouselNav;