import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import GoogleMap from "@googlemaps/react-wrapper"
function Maps(props) {
  const onMarkerClick = (props, marker) => {
    console.log('onMarkerClick', props, marker);
  }

  const onInfoWindowClose = () => {
    console.log('onInfoWindowClose');
  }

  return (
   
  <>
  <GoogleMap  center={{lat:props.lat, lng:props.lon}}></GoogleMap>
    <Map position={{lat:props.lat, lng:props.lon}}  google={props.google} zoom={14} >
    
      <InfoWindow onClose={onInfoWindowClose}>
        <div>
          <h1>{'Selected Place Name'}</h1>
        </div>
      </InfoWindow>
    </Map>
    </>
   
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCDj69xA-gFFOmX1xhpqiAdqzhMkovrauA'
})(Maps);
