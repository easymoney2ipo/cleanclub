import React, { useState } from 'react';
import { TextField, MenuItem } from '@mui/material';
import LocationMap from './LocationMap';

const LocationSelector = () => {
    const [location, setLocation] = useState('');

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    return (
        <div>
            <TextField label="Enter Address" value={location} onChange={handleLocationChange} select />
            <LocationMap location={location} />
        </div>
    );
};

export default LocationSelector;
