import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './Home.css'


export class Home extends React.Component {


    render(){

        return (
            <div className="App">
                <OwlCarousel
                  className="owl-theme"
                  loop
                  margin={5}
                  autoplay={'Autoplay'}
                  nav = {false}
                  navText ={"<>"}
                  >
                  <div class="item"><img src={require('../images/1.jpg')} alt="photo" /></div>
                  <div class="item"><img src={require('../images/2.jpg')} /></div>
                  <div class="item"><img src={require('../images/3.jpg')} /></div>
                  <div class="item"><img src={require('../images/4.jpg')} /></div>
                </OwlCarousel>

                <div className="TOP"><img src={require('../images/4.jpg')}/></div>

            </div>
        )
    }
}

