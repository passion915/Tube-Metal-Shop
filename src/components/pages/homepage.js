// // IMPORT PACKAGE REFERENCES

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import 'font-awesome/css/font-awesome.min.css';
import ReactPlayer from 'react-player';
import {geolocated} from 'react-geolocated';
import { withAlert } from 'react-alert';


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
import black from '../../assets/images/black-bg.png';


// COMPONENT
 
class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isCity: false };
    }

    componentDidUpdate(preProps) {
        if( preProps.coords !== this.props.coords ) {
            if( this.props.coords != null ) {
                this.getAddress();
            }
        }
    }

    getAddress() {
        const url =  "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + 
            this.props.coords.latitude +  "," + this.props.coords.longitude + 
            "&key=AIzaSyD8hHncloOIme-JQ1JtRXTp3ZO259rX4dM";

        const us_states = [ ["1", "Alabama"], ["1", "Alaska"], ["2", "Arizona"], ["2", "Arkansas"], ["3", "California"]
            , ["3", "Colorado"], ["4", "Connecticut"], ["4", "Delaware"], ["5", "Florida"], ["5", "Georgia"]
            , ["6", "Hawaii"], ["6", "Idaho"], ["7", "Illinois"], ["7", "Indiana"], ["8", "Iowa"]
            , ["8", "Kansas"], ["9", "Kentucky"], ["9", "Louisiana"], ["10", "Maine"], ["10", "Maryland"]
            , ["11", "Massachusetts"], ["11", "Michigan"], ["11", "Minnesota"], ["12", "Mississippi"], ["12", "Missouri"]
            , ["12", "Montana"], ["13", "Nebraska"], ["13", "Nevada"], ["13", "New Hampshire"], ["14", "New Jersey"]
            , ["14", "New Mexico"], ["14", "New York"], ["15", "North Carolina"], ["15", "North Dakota"], ["15", "Ohio"]
            , ["16", "Oklahoma"], ["16", "Oregon"], ["16", "Pennsylvania"], ["17", "Rhode Island"], ["17", "South Carolina"]
            , ["17", "South Dakota"], ["18", "Tennessee"], ["18", "Texas"], ["18", "Utah"], ["19", "Vermont"]
            , ["19", "Virginia"], ["19", "Washington"], ["20", "West Virginia"], ["20", "Wisconsin"], ["20", "Wyoming"]
            , ["21", "Hong Kong"] ];    

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("=====data", data);
                if( data["results"] != "" ) {
                    data["results"].map( (data_result, j) => {
                        us_states.map( (us_state, i) => {
                            if( data_result["formatted_address"].indexOf( us_state[1] ) != -1 ) {
                                this.props.alert.show(<div> { us_state[1] + " - Group " + us_state[0] } </div>);   
                            }
                        });
                    } )
                    
                }
                

                
        });
    }

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
                    <section className="banner-title">
                        <div className="title">Factory Direct</div>
                        <div className="welcome">Welcome to the Tube Metal Shop</div>
                        <div className="shopping"><span>Start Shopping Now</span></div>
                    </section>

                    <ReactPlayer url='https://vimeo.com/264897732' playing loop />
                </div>

                

                <div className="gallery-section pt-none">
                    <div className="black-section"><img src={black} /></div>

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

const geoWrapper = geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(HomePage);

const alertWrapper = withAlert(geoWrapper)

export default alertWrapper;
