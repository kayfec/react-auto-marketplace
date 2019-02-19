import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './Carousel.css'


export class Carousel extends React.Component {
    render(){

        return (
            <div className="App">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={5}
              autoplay={'Autoplay'}
              dotsSpeed={'15'}
              nav = {false}
              navText ={"<>"} 
              >
              <div class="item"><img src={require('../images/1.jpg')} alt="photo" /></div>
              <div class="item"><img src={require('../images/2.jpg')} /></div>
              <div class="item"><img src={require('../images/3.jpg')} /></div>
              <div class="item"><img src={require('../images/4.jpg')} /></div>
              </OwlCarousel>
          </div>
        )
    }
}

