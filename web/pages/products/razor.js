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

  const videoRef = useRef(null);
  const logoRef = useRef(null);

  const razorRef = useRef(null);
  const introRazorRef = useRef(null);
  const razorLogoRef = useRef(null);
  const razorContentRef = useRef(null);

  const textRef = useRef(null);


  

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
    const [razor, razor2] = sectionRefs.current;

    const loadAnimations = async () => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      const { MotionPathPlugin } = await import('gsap/MotionPathPlugin');
      gsap.registerPlugin(MotionPathPlugin);


    
        const t4 = gsap.timeline({
          scrollTrigger: {
            trigger: razor2,
            start: 'top-=70% top',
            end: '+=40%',
            pin: razor2,
            scrub: 4,
            anticipatePin: 1,
            // markers: true,
            // onLeave: function (self) {
            //   razorLogoRef.current.classList.add("hidden");
            // }
          }
        })
        t4.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power1.out' });
      



    };

    loadAnimations();

  }, []);

  return (
    <div className='-ml-6 -mr-6'>
        <section id='razor' className="relative p-6 w-screen h-full -m-0 overflow-hidden">
            <div id='razor-tagline' className='flex flex-col text-center items-center mx-auto justify-center'>
                <h1 className="mt-10 uppercase text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-wr_blue via-wr_red to-wr_blue inline-block text-transparent bg-clip-text">Razor</h1> 
                <p className='text-wr_text text-2xl mt-4'>Seamless Burst Boundaries and Ultra-stable Phase Control</p>
                <img src={`${process.env.NEXT_PUBLIC_CDN_LINK}/images/products/logos/Razor_Red.png`} alt="Scavenger Logo" className=" mt-10 w-20 h-auto mx-auto mb-10 sm:mb-0"/>
            </div>
            {/* <div id='scavenger-hero' className='text-left ml-10 mb-10'>
                <p className='text-white text-sm mb-4'>Tools for Designers</p>
                <h1 className='text-white text-3xl sm:5xl font-bold mb-4'>Reducing design costs</h1>
                <p className='text-white text-md max-w-2xl'>Mission design is expensive.</p>
                <p className='text-wr_text text-md max-w-4xl'>It's because designers don't have the toolkits to size their designs to real-world space missions.<br className='text-bold'/>We're changing that with Scavenger. And it's easy.</p>
            </div> */}
        </section>
      <section id='razor' ref={addToRefs} className="relative flex flex-col items-center justify-center text-center p-6 w-screen h-full -m-0 overflow-hidden">
        <div className="w-full p-6" ref={razorContentRef}>
                <div className='flex flex-col w-full text-center items-center'>
                    <div>
                      <h1 className='text-white text-3xl sm:5xl font-bold mb-4'>Unmatched <span className="text-wr_red">Portability.</span></h1>
                      <h1 className='text-white text-3xl sm:5xl font-bold mb-4'>Unmatched <span className="text-wr_red">Quality.</span></h1>
                      <h1 className='text-white text-3xl sm:5xl font-bold mb-4'>Unmatched <span className="text-wr_red">Speed.</span></h1>
                    </div>
                    <p className='text-wr_text text-left text-xl max-w-3xl mt-8'>
                          Meet your go-to solution for robust, native, and efficient 
                          SAR processing  in any location.  Designed for disconnected environments, 
                          it operates seamlessly on any hardware or platform, ensuring reliable 
                          performance without internet connectivity.
                      </p>
                </div>
            </div>
        {/* <div ref={razorRef} style={{opacity: 1}}>
          <h1 className='text-wr_text text-2xl uppercase mt-8 mb-0 sm:mb-10'><span className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-wr_blue via-wr_red to-wr_blue inline-block text-transparent bg-clip-text">RAZOR</span></h1>
          <div ref={introRazorRef} className='mt-20'>
            <h1 className='text-white text-3xl sm:text-5xl'>Our most powerful processor</h1>
            <h1 className='text-white text-3xl sm:text-5xl'></h1>
            <h1 className='text-white text-3xl sm:text-5xl'>meets your hardware.</h1>
          </div>
        </div>
        <div className="flex items-center justify-center z-50 mt-20" ref={razorLogoRef} style={{opacity: 0, scale: 1}}>
          <img
            src={`${process.env.NEXT_PUBLIC_CDN_LINK}/images/products/logos/Razor_Red.png`}
            alt="Razor"
            className="w-32 h-32 max-w-full max-h-full"
          />
        </div> */}
      </section>
      
      <section id='razor-content' ref={addToRefs} className="relative flex flex-col items-center justify-center text-center p-6 w-screen h-full -m-0 overflow-hidden bg-">
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-wr_text p-6 w-full mx-auto mb-10'>
          <div ref={textRef} className="flex flex-col justify-center items-center sm:items-start space-y-4 mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight text-center sm:text-left">
              Wide search area? No problem.
            </h1>
            <p className="text-lg sm:text-xl text-wr_text text-center sm:text-left">
              Quick detection through multi-resolution enhancements.
            </p>
          </div>
          <div className='flex justify-center items-center mx-auto'>
            <CirclesAnimation />
          </div>
        </div>
      </section>

      <section id='razor-slider' className="relative p-6 w-screen h-full -m-0 overflow-hidden text-center items-center">
          <div id='razor-slider-text' className='text-left ml-10 mb-10'>
              <h1 className='text-white text-3xl sm:5xl mb-4'>
                  See the World with New Clarity
              </h1>
              <p className='text-white text-md max-w-2xl'>Seamless integration with</p>
              <p className='text-wr_text text-md max-w-4xl'>Whether you've created your own images or purchased images from <a href='https://radarography.com'><span className='text-semibold text-wr_yellow underline'>radarography.com,</span></a> Crosshatch transforms your data into decisions. From digital elevation models to projections, it provides powerful insights without requiring advanced hardware capabilities.</p>
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