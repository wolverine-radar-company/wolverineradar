import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '/styles/home.module.css'
import Definition from '@/components/Items/definition'
import gsap from 'gsap'
import { useState, useEffect, useRef } from 'react'
// import ComparisonSlider from '@/components/Slider/slider'
import CirclesAnimation from '@/components/Animations/circlesAnimation'

import { SiMacos } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";

import { GoCpu } from "react-icons/go";
import { BsGlobe } from "react-icons/bs";
import { PiGlobeHemisphereWestFill } from "react-icons/pi";
import { MdOutlineSatelliteAlt } from "react-icons/md";
import Pricing from '@/components/Sections/pricing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const logoRef = useRef(null);

  

  useEffect(() => {
    // document.body.classList.add("overflow-y-hidden");
    const handleVideoLoad = () => {
      setIsVideoLoaded(true);
      if (logoRef.current) {
        logoRef.current.classList.add('animate-flyThrough');
        // document.body.classList.remove("overflow-y-hidden");
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('canplaythrough', handleVideoLoad);
      setTimeout(() => {
        handleVideoLoad();
      }, 2000);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('canplaythrough', handleVideoLoad);
      }
      // document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    const [hero, sar, razor, razor2, scavenger] = sectionRefs.current;

    const loadAnimations = async () => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      const { MotionPathPlugin } = await import('gsap/MotionPathPlugin');
      gsap.registerPlugin(MotionPathPlugin);


   


    };

    loadAnimations();
  }, []);

  return (
    <div className='-ml-6 -mr-6'>
      <section id='crosshatch' className="relative p-6 w-screen h-full -m-0 overflow-hidden">
            <div id='crosshatch-tagline' className='flex flex-col text-center items-center mx-auto justify-center'>
                <h1 className="mt-10 uppercase text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-wr_red via-wr_yellow_logo to-wr_red inline-block text-transparent bg-clip-text">Crosshatch</h1> 
                <p className='text-wr_text text-2xl mt-4'>Scientific Programming, Accelerated</p>
                <img src={`${process.env.NEXT_PUBLIC_CDN_LINK}/images/products/logos/Crosshatch_Yellow.png`} alt="Crosshatch Logo" className=" mt-10 w-20 h-auto mx-auto mb-10 sm:mb-0"/>
            </div>
            <div id='crosshatch-hero' className='text-left ml-10 mb-10'>
                <h1 className='text-white text-3xl sm:5xl mb-4'>
                    Transform data into <span className="font-extrabold"><br />decisions.</span>
                </h1>
                <p className='text-white text-md max-w-2xl'>Crosshatch works seamlessly as your go-to radar analytics environment.</p>
                <p className='text-wr_text text-md max-w-4xl'>Whether you've created your own images or purchased images from <a href='https://radarography.com'><span className='text-semibold text-wr_yellow underline'>radarography.com,</span></a> Crosshatch transforms your data into decisions. From digital elevation models to projections, it provides powerful insights without requiring advanced hardware capabilities.</p>
            </div>
        </section>
        <section id='crosshatch-content' className="relative items-center justify-center text-center p-6 w-screen h-full -m-0 overflow-hidden">
            <div className="relative w-screen h-auto -ml-10 mx-auto">
                <img src={`/Custom-Dem.png`} alt="Descriptive Alt Text" className="w-screen h-auto" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-wr_gray to-black opacity-75"></div>
            </div>
            <p className='text-wr_text text-left text-xs font-light p-2'>Custom DEM Overlay in Google Earth</p>

            <div className='mt-8 text-white sm:text-left w-screen'>
                <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 mb-8 p-20 md:-skew-x-[3deg]'>
                    <div className='w-full bg-wr_gray p-4 md:-skew-y-[15deg] md:skew-x-3 transition-all duration-300 ease-in-out md:hover:-translate-y-4 hover:text-wr_cyan rounded-md md:-ml-20 md:opacity-60 hover:opacity-100 mb-8 sm:mb-0'>
                        <div className="flex items-center mb-4">
                            <GoCpu className="w-8 h-8 mr-2" />
                            <h4 className="text-md">Multi-Dimensional Processing</h4>
                        </div>
                        <p className='text-sm text-wr_text'>Shared memory buffer allocation enables streamlined in-memory computation with parallelized CPU/GPU workflows.</p>
                    </div>
                    <div className='w-full bg-wr_gray p-4 md:-skew-y-[15deg] md:skew-x-3 transition-all duration-300 ease-in-out md:hover:-translate-y-4 hover:text-blue-400 rounded-md md:-ml-20 md:opacity-60 hover:opacity-100 mb-8 sm:mb-0'>
                        <div className="flex items-center mb-4">
                            <PiGlobeHemisphereWestFill className="w-8 h-8 mr-2" />
                            <h4 className="text-md">Integrated Global Coordinate Codes</h4>
                        </div>
                        <p className='text-sm text-wr_text'>Enabling simple geographic process distribution.</p>
                    </div>
                    <div className='w-full bg-wr_gray p-4 md:-skew-y-[15deg] md:skew-x-3 transition-all duration-300 ease-in-out md:hover:-translate-y-4 hover:text-wr_red rounded-md md:-ml-20 md:opacity-60 hover:opacity-100 mb-8 sm:mb-0'>
                        <div className="flex items-center mb-4">
                            <BsGlobe className="w-8 h-8 mr-2" />
                            <h4 className="text-md">Pseudo-spherical Coordinates</h4>
                        </div>
                        <p className='text-sm text-wr_text'>For seamless ellipsoid projections for any area (including global).</p>
                    </div>
                    <div className='w-full bg-wr_gray p-4 md:-skew-y-[15deg] md:skew-x-3 transition-all duration-300 ease-in-out md:hover:-translate-y-4 hover:text-wr_yellow_logo rounded-md md:-ml-20 md:opacity-60 hover:opacity-100 mb-8 sm:mb-0'>
                        <div className="flex items-center mb-4">
                            <MdOutlineSatelliteAlt className="w-8 h-8 mr-2" />
                            <h4 className="text-md">Optimized Satellite Propagation</h4>
                        </div>
                        <p className='text-sm text-wr_text'>Optimized SGP4 propagation with integrated <a className='font-semibold' href='https://www.space-track.org'>Spacetrack.org</a> access tools.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id='cta' className="relative p-6 w-screen h-full -m-0 overflow-hidden">
            <div id='cta-tagline' className='flex flex-col text-center items-center mx-auto justify-center mb-20'>
                <h1 className='text-white text-3xl sm:5xl font-bold mb-8'>Ready to try it?</h1>
                <div className='grid grid-cols-2 gap-4 '>
                    <a href='/dashboard'>
                        <button className='cursor-pointer hover:bg-white hover:text-black bg-black text-white w-32 h-12 rounded-lg border border-white hover:border-black'>
                            Dashboard
                        </button>
                    </a>
                    <a href='/sales'>
                        <button className='cursor-pointer hover:bg-white hover:text-black bg-black text-white w-32 h-12 rounded-lg'>
                            Contact Sales
                        </button>
                    </a>
                </div>
            </div>
        </section>
    </div>
  );
}
