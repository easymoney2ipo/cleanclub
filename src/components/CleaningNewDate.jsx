import React from 'react';
import { ServiceSelection, HourPicker, LocationSelector } from '../components';

const CleaningNewDate = () => {
    return (
        <div className="flex">
            {/* Desktop Layout */}
            <div className="lg:flex flex-col items-center lg:w-1/4 justify-center">
                <ServiceSelection />
            </div>
            <div className="flex lg:w-2/4 justify-top">
                <HourPicker />
            </div>
            <div className=" lg:w-1/4 ">
                <LocationSelector />
            </div>
        </div>
    );
};

export default CleaningNewDate;
