import React, { useEffect, useState, useRef } from 'react';
import Globe from 'react-globe.gl';

const ISSGlobe = () => {
  const [currentPosition, setCurrentPosition] = useState({ latitude: 0, longitude: 0 });
  const globeEl = useRef();

  useEffect(() => {
    const fetchISSData = async () => {
      try {
        const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        const data = await response.json();
        setCurrentPosition({ latitude: data.latitude, longitude: data.longitude });
      } catch (error) {
        console.error('Error fetching ISS data:', error);
      }
    };

    fetchISSData();
    const intervalId = setInterval(fetchISSData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const zoomToISS = () => {
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: currentPosition.latitude, lng: currentPosition.longitude, altitude: 0.9 }, 2000);
    }
  };

  return (
    <div className='p-2 relative flex justify-center items-center overflow-hidden'>
      <button className='absolute top-1 left-2 text-black bg-white rounded-lg px-2 py-1 z-10' onClick={zoomToISS}>Locate ISS</button>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={[currentPosition]}
        pointAltitude={0.1}
        pointColor={() => '#ff0000'}
        pointRadius={0.55}
        labelsData={[currentPosition]}
        labelText={(d) => `ISS ${d.latitude.toFixed(2)}, ${d.longitude.toFixed(2)}`}
        labelLat={(d) => d.latitude}
        labelLng={(d) => d.longitude}
        labelColor={() => '#00ff00'}
      />
    </div>
  );
};

export default ISSGlobe;
