import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './css/Home.css'


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
                  <div className="item"><img src={require('../images/1.jpg')} alt="photo" /></div>
                  <div className="item"><img src={require('../images/2.jpg')} /></div>
                  <div className="item"><img src={require('../images/3.jpg')} /></div>
                  <div className="item"><img src={require('../images/4.jpg')} /></div>
                </OwlCarousel>

                <div className="TOP"><img src={require('../images/4.jpg')}/></div>

            </div>
        )
    }
}

