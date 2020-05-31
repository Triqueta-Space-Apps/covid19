import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
import './styles.css';

const WrappedMap = withScriptjs(withGoogleMap(Map));

function Map(){
    return(
        <div>
            <GoogleMap defaultZoom = {15} defaultCenter = {{lat: 12, lng: 12}} />
        </div>
    );
}


export default function Mapa(){
    return <map className = 'Map'>
        <WrappedMap googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`} 
        loadingElement={<div style= {{height: `100%`}} />}
        containerElement =  {<div style={{ height: `400px` }} />}
        mapElement = {<div style={{ height: `100%` }} />}
        />
        
    </map>
}