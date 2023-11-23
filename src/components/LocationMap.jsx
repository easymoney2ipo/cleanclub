// LocationMap.jsx

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const LocationMap = ({ location }) => {
    const mapContainerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: 43, // Replace with the default latitude for your map
        lng: 16, // Replace with the default longitude for your map
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDPzsjcRo8WXX223QtW8CXquV70MYTe1_c">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10} // Adjust the default zoom level
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default LocationMap;
