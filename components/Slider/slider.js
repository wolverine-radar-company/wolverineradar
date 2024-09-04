import { useEffect } from 'react';

const ComparisonSlider = () => {
  useEffect(() => {
    // Move divisor and handle based on slider value
    const moveDivisor = () => {
      const handle = document.getElementById("handle");
      const divisor = document.getElementById("divisor");
      const slider = document.getElementById("slider");

      handle.style.left = slider.value + "%";
      divisor.style.width = slider.value + "%";
    };

    // Ensure initial position on load
    moveDivisor();

    // Cleanup function for useEffect (optional)
    return () => {
      // Clean up any subscriptions or listeners here if needed
    };
  }, []);

  // Define moveDivisor function here
  const moveDivisor = () => {
    const handle = document.getElementById("handle");
    const divisor = document.getElementById("divisor");
    const slider = document.getElementById("slider");

    handle.style.left = slider.value + "%";
    divisor.style.width = slider.value + "%";
  };

  return (
    <div className="container mx-auto max-w-screen-lg">
      <div id="comparison" className="relative w-full aspect-w-1 aspect-h-1">
        <figure className="absolute w-full h-full bg-cover" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/photoshop-face-before.jpg)' }}>
          {/* No content needed */}
        </figure>
        <div id="divisor" className="absolute bg-cover h-full" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/photoshop-face-after.jpg)', width: '50%' }}>
          <div className="absolute right-0 w-1/2 h-1/2 bg-white"></div>
          <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-white"></div>
        </div>
        <div id="handle" className="absolute w-12 h-12 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-0 h-0 border-6 border-transparent top-1/2 transform -translate-y-1/2 left-1/2"></div>
          <div className="absolute w-0 h-0 border-6 border-transparent top-1/2 transform -translate-y-1/2 right-1/2"></div>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-8 cursor-pointer appearance-none bg-transparent z-10"
          id="slider"
          onChange={moveDivisor} // Now moveDivisor is defined within the component scope
        />
      </div>
    </div>
  );
};

export default ComparisonSlider;
