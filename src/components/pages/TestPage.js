import React from 'react';
import {geolocated} from 'react-geolocated';
import { Alert, withAlert } from 'react-alert'

class TestPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isCity: false };
    }
    
    

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps) {
        if (prevProps.coords !== this.props.coords) {
            if ( this.props.coords != null) {
                this.getAddress()
            } 
        }
    }

    getAddress() {
        const url =  "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + 
            this.props.coords.latitude +  "," + this.props.coords.longitude + 
            "&key=AIzaSyBeba6lzmMRiPE8ZwQjjnpeB-78l2ob86M";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ isCity: true });
                this.props.alert.show('Oh look, an alert!');
            });
    }

    
  render() {

    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <div>
                <table>
                    <tbody>
                    <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
                    <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
                    <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
                    <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
                    <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
                    <tr><td>isCity</td><td></td></tr>
                        
                        

                    </tbody>
                </table>

                
            </div>
          : <div>
              Getting the location data&hellip; 
              
          </div>;
  }
}
 
const geoWrapper = geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(TestPage);

const alertWrapper = withAlert(geoWrapper)

export default alertWrapper;
