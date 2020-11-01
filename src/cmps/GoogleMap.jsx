import React from "react";
import { GoogleApiWrapper, InfoWindow, Marker, Map } from 'google-maps-react';
class _GoogleMap extends React.Component {
  state = {
    lat: 32.11387923078556,
    lng: 34.82767207691768,
  }

  render() {
    const containerStyle = {
        position: 'absolute',  
        width: '350px',
        height: '350px',
        right:'100px'

      }
    return (
     <Map
        initialCenter={this.state}
        center={this.state}
        google={this.props.google}
        zoom={12}
        containerStyle={containerStyle}
       
        
      >
        <Marker
          name={"France"}
          position={{ lat: 32.0657353594228, lng: 34.87023370314972 }}
        />
       

        <InfoWindow position={this.state} visible={true}>
          <div></div>
        </InfoWindow>

        
        
      </Map> 
    );
  }
}

export const GoogleMap = GoogleApiWrapper({
  apiKey: "AIzaSyApO-6umWfoouV0eoggSlSSD5NNrYJqUrE"
})(_GoogleMap);
