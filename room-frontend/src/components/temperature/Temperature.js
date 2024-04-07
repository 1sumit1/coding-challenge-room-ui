import React, { useState,useEffect } from 'react';

function Temperature({room}) {
  const [temperature, setTemperature] = useState(room.currentTemperature); 
  const [heatingEnabled, setHeatingEnabled] = useState(false);
  const [coolingEnabled, setCoolingEnabled] = useState(false);

  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
  };

  useEffect(() => {
    setTemperature(room.currentTemperature);
  }, [room.currentTemperature]);

  useEffect(() => {
    if (temperature < 20) {
      setHeatingEnabled(true);
      setCoolingEnabled(false);
    } else if (temperature > 25) {
      setCoolingEnabled(true);
      setHeatingEnabled(false);
    } else {
      setHeatingEnabled(false);
      setCoolingEnabled(false);
    }
  }, [temperature]);

  return (
    <div>
      <input
        type="range"
        min="10"
        max="30" 
        value={temperature}
        onChange={handleTemperatureChange}
      />
       <div>
        <span className={coolingEnabled ? 'green' : 'red'}></span>
      </div>
      <p>Current Temperature: {temperature}°C</p>
    </div>
  );
}

export default Temperature;
