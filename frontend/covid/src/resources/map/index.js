import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';
import './styles.css';

const WrappedMap = withScriptjs(withGoogleMap(Map));

function Map(){
    return(
        <div>
            <GoogleMap defaultZoom = {4.5} defaultCenter = {{lat: 31, lng: -100}}> <Marker position={{ lat: 31, lng: -100}} /></GoogleMap>
        </div>
    );
}


export default function Mapa(){
    return <map className = 'Map'>
        <WrappedMap googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`} 
        loadingElement={<div style= {{height: `100%`}} />}
        containerElement =  {<div style={{ height: `700px` }} />}
        mapElement = {<div style={{ height: `100%` }} />}
        />
        
    </map>
}