import React, { useState } from 'react';
import { FormControl, FormLabel, Radio, RadioGroup, FormControlLabel } from '@mui/material';

const ServiceSelection = () => {
  const [selectedService, setSelectedService] = useState('');

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" className='mb-4 '>Odaberite uslugu:</FormLabel>
      <RadioGroup value={selectedService} onChange={handleServiceChange} className=''>
        <FormControlLabel value="regular" control={<Radio />} label="Redovito čišćenje" />
        <FormControlLabel value="seasonal" control={<Radio />} label="Sezonsko čišćenje" />
        <FormControlLabel value="deep" control={<Radio />} label="Dubinsko čišćenje" />

      </RadioGroup>
    </FormControl>
  );
};

export default ServiceSelection;
