// pages/comparison.js
import { useEffect, useState, useRef } from 'react';
import Definition from '@/components/Items/definition'
import Image from 'next/image';
import CardStack from '@/components/Items/cardStack';


const Comparison = () => {
    const videoRef = useRef(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        // document.body.classList.add("overflow-y-hidden");
        const handleVideoLoad = () => {
          setIsVideoLoaded(true);
        };
    
        const videoElement = videoRef.current;
        if (videoElement) {
          videoElement.addEventListener('canplaythrough', handleVideoLoad);
          setTimeout(() => {
            handleVideoLoad();
          }, 2000);
        }
    

        const divisor = document.getElementById('divisor');
        const handle = document.getElementById('handle');
        const slider = document.getElementById('slider');
    
        const moveDivisor = () => {
          handle.style.left = (slider.value) + '%';
          divisor.style.width = (slider.value) + '%';
        };
    
        slider.addEventListener('input', moveDivisor);
        moveDivisor();
    
        return () => {
          slider.removeEventListener('input', moveDivisor);
          if (videoElement) {
            videoElement.removeEventListener('canplaythrough', handleVideoLoad);
          }
        };

      }, []);
    

  return (
    <div className='-ml-6 -mr-6'>
      {/* {!isVideoLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-32 h-32 animate-pulse"
            ref={logoRef}
            style={{ transition: 'opacity 1s ease-in-out', animationFillMode: 'forwards' }}
          />
        </div>
      )} */}
      
      <section id="hero" className="h-screen relative flex justify-center items-center -mt-4 -top-20 w-screen">
        <video ref={videoRef} autoPlay playsInline loop muted controls={false} className="absolute inset-0 max-w-full h-full object-cover overflow-hidden overflow-x-hidden" style={{ width: '100vw' }}>
          <source src="https://videos.pexels.com/video-files/2871916/2871916-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='pt-20 p-6 text-black z-10'>
          <Definition />
          <p className="gfs text-4xl sm:text-6xl text-wr_yellow mt-10 z-50 font-bold text-center animate__animated animate__zoomIn animate__delay-1s">
            See the world with new clarity.
          </p>
        </div>
      </section>
      {/* style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_CDN_LINK}/images/site/hero.png)`, width: '100vw'}} */}
      <section id='accelerating' className="relative p-6 w-screen h-full -m-0 overflow-hidden">
        <h1 className='text-wr_blue_logo text-3xl sm:text-5xl font-bold uppercase text-center'>Accelerating a Digitized Earth</h1>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-full mt-20'>
          {/* Left Side */}
          <div className='p-6 w-full flex flex-col items-center justify-center'>
            <p className='text-wr_text text-md sm:text-xl text-left max-w-lg'>
            Synthetic Aperture Radar (SAR) satellites are powerful tools to measure <span className='font-caveat font-bold text-3xl mr-1 text-white'>millimeter-level changes </span> on the Earth's surface. 
            Satellite designs are undergoing <span className='font-caveat font-bold text-3xl mr-1 text-white'>exponential improvements </span> as electronics, launch, and communications are being 
            <span className='font-caveat font-bold text-3xl mr-1 text-white'> supercharged </span> by private investments.
            </p>
          </div>

          {/* Right Side */}
          <div className="w-full h-full mx-auto p-6 rounded-lg overflow-hidden flex flex-col">
            <div className="mx-auto max-w-2xl lg:text-center p-4">
              <Image src={"/images/MEBDABS_vd.jpg"} width={608} height={300}/>
              <p className='-mt-6 text-white text-left ml-4 md:ml-10 text-[8px]'>Contains modified Copernicus Sentinel data 2023</p>
            </div>
          </div>

        </div>
      </section>

      <section id='oldtech' className="relative p-6 w-screen h-full -m-0 overflow-hidden">
        {/* <h1 className='text-wr_blue_logo text-3xl sm:text-5xl font-bold uppercase text-center'>Old Technology, Knowledge Gaps</h1> */}
        
        <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-full mt-20'>
          {/* Left Side */}
          <div className="w-full h-full mx-auto p-6 rounded-lg overflow-hidden flex flex-col">
            <div className="mx-auto max-w-2xl lg:text-center p-4">
              <Image src={"/sentinel-1.jpeg"} width={608} height={300}/>
              <p className='-mt-6 text-white text-left ml-4 md:ml-10 text-[8px]'>Sentinel 1B Satellite in development, image courtesy of European Space Agency.</p>
            </div>
          </div>

          {/* Left Side */}
          <div className='p-6 w-full flex flex-col items-center justify-center'>
            <p className='text-wr_text text-md sm:text-xl text-left max-w-lg'>
            Free data sources such as Sentinel 1 and NISAR are used by <span className='font-caveat font-bold text-3xl mr-1 text-white'>more than ten thousand </span> researchers in academia and private enterprise throughout the world, 
            but these satellites are government-built and contain <span className='font-caveat font-bold text-3xl mr-1 text-white'>old technology </span> that leaves gaps in scientific understanding of the planet. 
            </p>
          </div>


        </div>
      </section>

      <section id='mission' className="relative p-6 w-screen h-full -m-0 overflow-hidden">
        <h1 className='text-wr_blue_logo text-3xl sm:text-5xl font-bold uppercase text-center'>Our Mission</h1>
        
        <div className='flex flex-col w-full h-full mt-20 text-white text-center'>
            <div className='mb-8'>
                <h1 className='text-white uppercase font-extrabold text-3xl'>Increase</h1>
                <p className='text-white font-caveat text-3xl'>the number of InSAR-capable satellites on orbit</p>
            </div>
            <div className='mb-8'>
                <h1 className='text-white uppercase font-extrabold text-3xl'>Improve</h1>
                <p className='text-white font-caveat text-3xl'>the quality of the data the satellites produce.</p>
            </div>
            <div className='mb-8'>
                <h1 className='text-white uppercase font-extrabold text-3xl'>Empower</h1>
                <p className='text-white font-caveat text-3xl'>researchers to build new applications for the data</p>
            </div>



        </div>
      </section>

      <section id='technology' className="relative p-6 w-screen h-full -m-0 overflow-hidden">
        {/* <h1 className='text-wr_blue_logo text-3xl sm:text-5xl font-bold uppercase text-center'>Our Technology</h1> */}
        
        <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-full'>
          {/* Left Side */}
          <div className='p-6 w-full h-full flex flex-col items-center justify-center mx-auto'>
            <div>
            <h1 className='text-wr_blue_logo text-3xl sm:text-5xl font-bold uppercase mb-8 text-center'>Our Technology</h1>
            <div>
            <p className='text-wr_text text-md sm:text-xl text-left max-w-lg'>
            Our algorithm “Sliding Full Aperture” processing fuses collected “bursts” of TOPSAR (InSAR) collections to create 
            large synthetic apertures with up to 80x the signal content as compared to traditional processing approaches
            </p>
            </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full h-full mx-auto p-6 rounded-lg overflow-hidden flex flex-col">
            <div className="flex w-full text-white font-semibold p-4 pb-0 justify-between">
                <span className="mr-0">Our Processing</span>
                <span>Traditional Processing</span>
            </div>
            <div className="mx-auto w-full lg:text-center p-4">
                <div className="max-w-4xl mx-auto">
                <div id="comparison" className="relative w-full pb-[100%] overflow-hidden">
                    <figure
                    className="absolute w-full h-full m-0 bg-cover"
                    style={{
                        backgroundImage: `url('${process.env.NEXT_PUBLIC_CDN_LINK}/images/site/white_house_coarse.png')`,
                    }}
                    >
                    <div
                        id="divisor"
                        className="absolute w-[50%] h-full bg-cover"
                        style={{
                        backgroundImage: `url('${process.env.NEXT_PUBLIC_CDN_LINK}/images/site/white_house_fine.png')`,
                        }}
                    >
                        <div className="absolute right-[-2px] w-[4px] h-[calc(50%-25px)] bg-white z-10 top-0" />
                        <div className="absolute right-[-2px] w-[4px] h-[calc(50%-25px)] bg-white z-10 bottom-0" />
                    </div>
                    <div
                        id="handle"
                        className="absolute z-10 h-[50px] w-[50px] top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
                    >
                        <div className="absolute top-1/2 -mt-[6px] left-1/2 -ml-[17px] w-0 h-0 border-t-[6px] border-t-transparent border-r-[6px] border-r-white border-b-[6px] border-b-transparent" />
                        <div className="absolute top-1/2 -mt-[6px] right-1/2 -mr-[17px] w-0 h-0 border-t-[6px] border-t-transparent border-l-[6px] border-l-white border-b-[6px] border-b-transparent" />
                    </div>
                    </figure>
                    <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="40"
                    id="slider"
                    className="p-4 cursor-pointer custom-slider w-full"
                    />
                </div>
                </div>
                <p className="-mt-6 text-white text-left ml-4 md:ml-10 text-[8px]">Contains modified Copernicus Sentinel data 2023</p>
            </div>
            </div>
        </div>
      </section>
      <section id="technology" className="relative p-6 w-screen h-full overflow-hidden -mt-20">
        <div className="flex justify-center items-center min-h-screen relative">
            <div className="relative text-white">
            {/* Oval */}
            <div className="bg-wr_blue_logo text-black py-4 px-6 rounded-full inline-flex items-center justify-center">
                <h1 className="text-3xl sm:text-5xl font-bold uppercase text-center">
                Our Strategy
                </h1>
            </div>
            {/* White Lines */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-72 w-1"
                style={{ zIndex: -1 }}>
                    
                </div>
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-72 w-1 rotate-45"
                style={{ zIndex: -1 }}>
                    
                </div>
            
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-72 w-1 -rotate-45"
                style={{ zIndex: -1 }}>
                    
                    </div>
            
            </div>
        </div>
    </section>

    <section id='accelerating' className="relative p-6 w-screen h-full -mt-20 overflow-hidden">
        <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-full mt-8'>
          {/* Left Side */}
          <div className='p-6 w-full flex flex-col items-center justify-center'>
          <h1 className='text-wr_blue_logo text-2xl font-bold uppercase text-center'>Builders</h1>
            <p className='text-wr_text text-md sm:text-xl text-left max-w-lg'>
            Lower the cost of new satellites through turn-key modeling software and ground processing solutions
            </p>
          </div>

          {/* Right Side */}
          <div className="w-full h-full mx-auto p-6 rounded-lg overflow-hidden flex flex-col">
            <div className="mx-auto max-w-2xl lg:text-center p-4 w-1/2">
              <Image src={"/builder.jpg"} width={608} height={300}/>
              {/* <p className='-mt-6 text-white text-left ml-4 md:ml-10 text-[8px]'>Contains modified Copernicus Sentinel data 2023</p> */}
            </div>
          </div>

        </div>
    </section>
    <section id='accelerating' className="relative p-6 w-screen h-full -m-0 overflow-hidden">
        <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-full mt-8'>
            {/* Right Side */}
          <div className="w-full h-full mx-auto p-6 rounded-lg overflow-hidden flex flex-col">
            <div className="mx-auto max-w-2xl lg:text-center p-4 w-1/2">
              <Image src={"/builder.jpg"} width={608} height={300}/>
              {/* <p className='-mt-6 text-white text-left ml-4 md:ml-10 text-[8px]'>Contains modified Copernicus Sentinel data 2023</p> */}
            </div>
          </div>
          {/* Left Side */}
          <div className='p-6 w-full flex flex-col items-center justify-center'>
          <h1 className='text-wr_blue_logo text-2xl font-bold uppercase text-center'>Users</h1>
            <p className='text-wr_text text-md sm:text-xl text-left max-w-lg'>
            Improve the quality of existing sensor data to grow the market size and lower the cost of quality derived products
            </p>
          </div>


        </div>
    </section>
    <section id='accelerating' className="relative p-6 w-screen h-full -m-0 overflow-hidden">
        <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-full mt-8'>
          {/* Left Side */}
          <div className='p-6 w-full flex flex-col items-center justify-center'>
          <h1 className='text-wr_blue_logo text-2xl font-bold uppercase text-center'>Researchers</h1>
            <p className='text-wr_text text-md sm:text-xl text-left max-w-lg'>
            Create flexible processing software that enables rapid innovation and new product development to expand the user base and apply the technology to more market verticals.
            </p>
          </div>

          {/* Right Side */}
          <div className="w-full h-full mx-auto p-6 rounded-lg overflow-hidden flex flex-col">
            <div className="mx-auto max-w-2xl lg:text-center p-4 w-1/2">
              <Image src={"/builder.jpg"} width={608} height={300}/>
              {/* <p className='-mt-6 text-white text-left ml-4 md:ml-10 text-[8px]'>Contains modified Copernicus Sentinel data 2023</p> */}
            </div>
          </div>

        </div>
    </section>



    </div>
  );
};

export default Comparison;
