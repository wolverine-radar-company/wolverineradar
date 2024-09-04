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
  const satelliteRef = useRef(null);
  const pathRef = useRef(null);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const logoRef = useRef(null);

  const sar_titleRef = useRef(null);
  const sar_contentRef = useRef(null);
  const sar_imageRef = useRef(null);

  const razorRef = useRef(null);
  const introRazorRef = useRef(null);
  const razorLogoRef = useRef(null);
  const razorContentRef = useRef(null);

  const crosshatchRef = useRef(null);
  const introcrosshatchRef = useRef(null);
  const crosshatchLogoRef = useRef(null);
  const crosshatchContentRef = useRef(null);

  const textRef = useRef(null);
  const squareRef = useRef(null);

  const lineRef = useRef(null);
  const scavengerLineRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  

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

    gsap.set(scavengerLineRef.current, {
        strokeDasharray: scavengerLineRef.current.getTotalLength(),
        strokeDashoffset: scavengerLineRef.current.getTotalLength(),
    });

    const scavengerCardTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: scavenger,
            // pin: sar,
            start: 'top top',
            end: '+=70%',
            scrub: 4,
            anticipatePin: 1,
            // markers: true, // Remove in production
            onUpdate: self => {
                const progress = self.progress;
                const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

                cards.forEach((card, index) => {
                    if (progress * 100 >= (index + 1) * 25) {
                        gsap.to(card, { opacity: 1, duration: 0.5 });
                    }
                });
            }
        },
    });

    scavengerCardTimeline.to(scavengerLineRef.current, {
        strokeDashoffset: 10,
        duration: 1,
    },);


    };

    loadAnimations();
  }, []);

  return (
    <div className='-ml-6 -mr-6'>
        <section id='scavenger' className="relative p-6 w-screen h-full -m-0 overflow-hidden">
            <div id='scavenger-tagline' className='flex flex-col text-center items-center mx-auto justify-center'>
                <h1 className="mt-10 uppercase text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-wr_cyan via-wr_blue to-wr_cyan inline-block text-transparent bg-clip-text">Scavenger</h1> 
                <p className='text-wr_text text-2xl mt-4'>Collection Optimization for Global Impact</p>
                <img src={`${process.env.NEXT_PUBLIC_CDN_LINK}/images/products/logos/Scavenger_Blue.png`} alt="Scavenger Logo" className=" mt-10 w-20 h-auto mx-auto mb-10 sm:mb-0"/>
            </div>
            <div id='scavenger-hero' className='text-left ml-10 mb-10'>
                <p className='text-white text-sm mb-4'>Tools for Designers</p>
                <h1 className='text-white text-3xl sm:5xl font-bold mb-4'>Reducing design costs</h1>
                <p className='text-white text-md max-w-2xl'>Mission design is expensive.</p>
                <p className='text-wr_text text-md max-w-4xl'>It's because designers don't have the toolkits to size their designs to real-world space missions.<br className='text-bold'/>We're changing that with Scavenger. And it's easy.</p>
            </div>
        </section>
        <section ref={addToRefs} id='scavenger-content' className="relative p-6 w-screen min-h-screen -m-0 overflow-hidden grid grid-cols-1 sm:grid-cols-2 ml-10">
            <div className='items-center'>
                <div id='scavenger-point' className='flex flex-col text-center items-left mb-16'>
                    <div className='text-left'>
                        <h1 className='text-white text-xl font-bold mb-2'>1 - Create Targets</h1>
                        <p className='text-wr_text text-md max-w-sm'>Load a set of pre-defined targets or custom defined targets to create a day-in-the-life simulation of collection.</p>
                    </div>
                </div>
                <div id='scavenger-point' className='flex flex-col text-center items-left mb-16'>
                    <div className='text-left'>
                        <h1 className='text-white text-xl font-bold mb-2'>2 - Generate Files</h1>
                        <p className='text-wr_text text-md max-w-sm'>Generate collection description files for each target acquisition.</p>
                    </div>
                </div>
                <div id='scavenger-point' className='flex flex-col text-center items-left mb-16'>
                    <div className='text-left'>
                        <h1 className='text-white text-xl font-bold mb-2'>3 - Analyze Results</h1>
                        <p className='text-wr_text text-md max-w-sm'>View collection events through online dashboard for simulated power and data management visualizations. Test your solutions against real-world and custom-defined problem.</p>
                    </div>
                </div>
                <div id='scavenger-point' className='flex flex-col text-center items-left mb-16'>
                    <div className='text-left'>
                        <h1 className='text-white text-xl font-bold mb-2'>4 - Launch with Confidence</h1>
                        <p className='text-wr_text text-md max-w-sm'>Execute your plan with thorough preparation and a comprehensive understanding of all parameters, ensuring a seamless and successful launch.</p>
                    </div>
                </div>
            </div>
            <div className='items-left hidden md:block'>
                <div className='relative'>
                    <svg className='absolute left-1/2 top-0 mt-6 z-0' width="2" height="500%">
                        <path ref={scavengerLineRef} id="linepath" d="M1,0 V600%" stroke="white" fill="transparent" />
                    </svg>
                    <div className="flex flex-col items-center space-y-40 pt-20 relative z-10">
                        <div ref={card1Ref} className="card rounded-md w-32 h-20 shadow-lg p-4 text-center text-white bg-black flex flex-col justify-center relative z-20 border border-white">
                            <h3 className="text-xl font-bold">Design</h3>
                        </div>
                        <div ref={card2Ref} className="card rounded-md w-32 h-20 text-white bg-black shadow-lg p-4 text-center flex flex-col justify-center relative z-20 border border-white">
                            <h3 className="text-xl font-bold">Test</h3>
                        </div>
                        <div ref={card3Ref} className="card rounded-md w-32 h-20 text-white bg-black shadow-lg p-4 text-center flex flex-col justify-center relative z-20 border border-white">
                            <h3 className="text-xl font-bold">Deploy</h3>
                        </div>
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