

// import React from 'react'
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { Map, GoogleApiWrapper } from 'google-maps-react';


// export default function Map(props) {
//   var customicon=L.icon({
//     iconUrl:'/pointer.png',
//     iconSize:[50,50],
  
//   })
//   const marker =L.marker([50.505, 30.57],{icon : customicon});
  
//   //AIzaSyCDj69xA-gFFOmX1xhpqiAdqzhMkovrauA
//   return (
//     // <MapContainer center={[props.lat, props.lon]} zoom={25} scrollWheelZoom={true} style={{ height: '400px', width: '50%' }}>
//     //   <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
//     //   <Marker position={[props.lat, props.lon]} icon={customicon}>
//     //   <Popup>{props.nom}</Popup>
//     //   </Marker>
  
//     // </MapContainer>
//     <Map google={this.props.google} zoom={14}>

//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />

//         <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//         </InfoWindow>
//       </Map>

//   )
// }



import React from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, Wrapper } from '@googlemaps/react-wrapper';

export default function Maps() {
  // const onMarkerClick = (props, marker) => {
  //   console.log('onMarkerClick', props, marker);
  // }

  // const onInfoWindowClose = () => {
  //   console.log('onInfoWindowClose');
  // }
  const {isLoaded } = useLoadScript({
    googleMapsApiKey:'AIzaSyCDj69xA-gFFOmX1xhpqiAdqzhMkovrauA',
  });

  if(!isLoaded) return <>Loading ...</>;
  return (
    
    // <Wrapper apiKey={"AIzaSyCDj69xA-gFFOmX1xhpqiAdqzhMkovrauA"}>

    // <div style={{height: 'calc(100% - 100px)',marginBottom:'100px'}}>
    <GoogleMap center={{lat:31.6635585, lng:-7.9695511}}  zoom={14} >
      {/* <Marker position={[props.lat, props.lon]} onClick={onMarkerClick} name={'Current location'} />
      <InfoWindow onClose={onInfoWindowClose}>
        <div>
          <h1>{'Selected Place Name'}</h1>
        </div>
      </InfoWindow> */}
    </GoogleMap>
    // </div>
    // </Wrapper>
   
  );
}

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCDj69xA-gFFOmX1xhpqiAdqzhMkovrauA'
// })(Maps);
