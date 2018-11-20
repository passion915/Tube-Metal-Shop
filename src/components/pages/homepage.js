// // IMPORT PACKAGE REFERENCES

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import 'font-awesome/css/font-awesome.min.css';
import ReactPlayer from 'react-player'

import garage1 from '../../assets/images/garage-1.jpg';
import garage2 from '../../assets/images/garage-2.jpg';
import garage3 from '../../assets/images/garage-3.jpg';
import garage4 from '../../assets/images/garage-4.jpg';
import febrication1 from '../../assets/images/febrication-1.jpg';
import febrication2 from '../../assets/images/febrication-2.jpg';
import febrication3 from '../../assets/images/febrication-3.jpg';
import carports1 from '../../assets/images/carports-1.jpg';
import carports2 from '../../assets/images/carports-2.jpg';
import carports3 from '../../assets/images/carports-3.jpg';
import carports4 from '../../assets/images/carports-4.jpg';
import carports5 from '../../assets/images/carports-5.jpg';
import carports6 from '../../assets/images/carports-6.jpg';
import hiring_installers from '../../assets/images/hiring-installers.jpg';


// COMPONENT
 
export default class HomePage extends React.Component {  
    responsive = {
        0: { items: 1 },
        600: { items: 3 },
        1024: { items: 4 },
      };

    garagesItems = [ [garage1, 'garage1'], [garage1, 'garage1'], [garage1, 'garage1'], [garage1, 'garage1'] ];
    febricationItems = [ [febrication1, 'febrication1'], [febrication1, 'febrication1'], [febrication1, 'febrication1'], [febrication1, 'febrication1'] ];
  
    galleryItem = (item, i) => (
        <div key={`key-${i}`} className="gallery-item">
            <a href="#">
                <img src={ item[0] } />
            </a>
            <h4>{ item[1] }</h4>
        </div>
    )

  
  
    render() {
        const garagesItems = this.garagesItems.map(this.galleryItem);
        const febricationItems = this.febricationItems.map(this.galleryItem);
        
        return (
            <main>
                <div className="jumbotron jumbotron-fluid text-dark bg-black mb-none animated fadeIn">
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
                </div>

                <div className="gallery-section">
                    <div className="container">
                        <div className="garages-gallery">
                            
                            <div className="row">
                                <div className="col-md-6 col-6 pl-40 align-left">
                                    <h3 className="section-title"><i className="fa fa-bolt mr-20 heading-icon"></i>Garages</h3>
                                </div>
                                
                                <div className="col-md-6 col-6 pr-25 align-right arrow-div">
                                    <button onClick={() => this.Carousel1._slidePrev()} className="mr-10">
                                        <i className="fa fa-angle-left"></i>
                                    </button>
                                    
                                    <button onClick={() => this.Carousel1._slideNext()}>
                                        <i className="fa fa-angle-right"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <AliceCarousel
                                items={garagesItems}
                                dotsDisabled={true}
                                buttonsDisabled={true}
                                responsive={this.responsive}
                                ref={ el => this.Carousel1 = el }
                            />
                        </div>

                        <div className="febrication-gallery mt-15">
                            
                            <div className="row">
                                <div className="col-md-6 col-6 pl-40 align-left">
                                    <h3 className="section-title">
                                        <i className="fa fa-bolt mr-20 heading-icon"></i>Febrication
                                    </h3>
                                </div>
                                
                                <div className="col-md-6 col-6 pr-25 align-right arrow-div">
                                    <button onClick={() => this.Carousel2._slidePrev()} className="mr-10">
                                        <i className="fa fa-angle-left"></i>
                                    </button>
                                    
                                    <button onClick={() => this.Carousel2._slideNext()}>
                                        <i className="fa fa-angle-right"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <AliceCarousel
                                items={febricationItems}
                                dotsDisabled={true}
                                buttonsDisabled={true}
                                responsive={this.responsive}
                                ref={ el => this.Carousel2 = el }
                            />
                        </div>
                    </div>
                </div>

                <div className="carports-section">
                    <div className="container">
                        <div className="row title-div">
                            <div className="col-md-6 col-6 align-left">
                                <h3 className="section-title"><i className="fa fa-book mr-10 heading-icon"></i>Carports</h3>
                            </div>
                            
                            <div className="col-md-6 col-6 pr-25 align-right see-all-div">
                                <a href="">See all videos</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3 gallery-item">
                                <a href="#">
                                    <img src={ carports1 } />
                                </a>
                                <h4>Carports</h4>
                            </div>

                            <div className="col-md-3 gallery-item">
                                <a href="#">
                                    <img src={ carports1 } />
                                </a>
                                <h4>Carports</h4>
                            </div>

                            <div className="col-md-3 gallery-item">
                                <a href="#">
                                    <img src={ carports1 } />
                                </a>
                                <h4>Carports</h4>
                            </div>

                            <div className="col-md-3 gallery-item">
                                <a href="#">
                                    <img src={ carports1 } />
                                </a>
                                <h4>Carports</h4>
                            </div>

                            <div className="col-md-3 gallery-item">
                                <a href="#">
                                    <img src={ carports1 } />
                                </a>
                                <h4>Carports</h4>
                            </div>

                            <div className="col-md-3 gallery-item">
                                <a href="#">
                                    <img src={ carports1 } />
                                </a>
                                <h4>Carports</h4>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="hiring-section">
                    <div className="container">
                        <div className="container">
                            <div className="row">
                                <img src={ hiring_installers } />
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>
        );
    }
}