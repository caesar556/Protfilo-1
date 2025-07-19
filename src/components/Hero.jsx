import { styles } from "../utils/styles";
import { useState, useRef, useEffect } from 'react';
import Loader from './Loader';
import gsap from "gsap";
import { authLogo } from '../assets';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  }
  const textRef = useRef(null);
  
  useEffect(() => {
    const text = textRef.current;

    const splitText = text.innerText
      .split('')
      .map(char => `<h2 class="inline-block">${char === ' ' ? '&nbsp;' : char}</h2>`)
      .join('');

    text.innerHTML = splitText;

    gsap.fromTo(
      text.querySelectorAll('h2'),
      { opacity: 0, y: -50, x: -30 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        stagger: 0.05,
        duration: 3,
        ease: 'power3.inOut',
      }
    );
    gsap.fromTo(
      "#p-hero",
      { opacity: 0, y: 50, x: 30 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        stagger: 0.05,
        duration: 2,
        ease: 'power3.inOut',
      }
    );
    gsap.fromTo(
      "#point-hero",
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: 'power3.in',
      }
    );
    

  }, []);



  return (
    <section id ="home" className="w-screen h-dvh z-30">
      {isLoading &&
        <Loader />
      }
      <div id="video-frame" className="relative h-dvh overflow-hidden">
        <div className="inset-0 absolute w-full h-full ">
          <video
            className="object-cover h-full w-full"
            src="./videos/hero-2.mp4" type="video/mp4"
            autoPlay
            loop
            muted
            preload="auto"
            poster={authLogo}
            onLoadedData={handleLoading}
          />
        </div>
        <div
          className="absolute  top-36 sm:left-32 left-10 z-20 flex justify-center gap-4"
        >
          <div id="point-hero" className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#ff0000]' />
            <div className='w-1 sm:h-80 h-40 bg-[#ff0000] ' />
          </div>
          <div className="py-4 special-font">
            <h1 ref={textRef} className={`${styles.heroHeadText} text-white mt-12`}>
              Hi I'm Belal
            </h1>
            <p id="p-hero" className={`${styles.heroSubText} text-white-100 mt-2.5`}>
              I develop user <b className="text-[#ff0D00]">interfaces,</b>
              <br className="" />
              and web <b className="text-[#ff0D00]">applications.</b>
            </p>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero;
