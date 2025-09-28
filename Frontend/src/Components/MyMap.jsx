import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';


let containerStyle = {
  width: '400px',
  height: '520px'
};

const center = {
  lat: 19.0760,
  lng: 72.8777
};

function MyMap() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 860);

  useEffect(() => {
    function handleResize() {
    const newIsMobile = window.innerWidth <= 860;
    setIsMobile(newIsMobile);

    }
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  function fun(){
    if(isMobile){
      setMapWidthHeight();
    }else {
      containerStyle = {
      width: '400px',
      height: '520px'
      };
    }
  }
  const setMapWidthHeight=()=> {
    containerStyle={
        width: '620px',
        height: '450px'
    }
  }
  fun();

  return (
    <LoadScript googleMapsApiKey="AIzaSyASQttXbMwG-G2BeqBbWD9_Fo7I2qJZgzU">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components like markers can go here */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;
