import { Tilt } from "react-tilt";
import { useRef, useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const CardElement = ({ title, index, icon }) => {
  const cardRef = useRef(null);
  useEffect(() => {
    const refElement = cardRef.current;
    const animation = gsap.fromTo(
      refElement,
      { opacity: 0, x: -80, scale: 0.2 },
      {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: index * 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: refElement,
          start: "top 90%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
    return () => {
      animation.scrollTrigger.kill();
    };
  }, [index]);
  return (
    <div ref={cardRef} >
      <Tilt className="w-[250px] xs:w-[250px]">
        <div
          className="shadow-card p-[1px] rounded-[20px] green-pink-gradient"
        >
          <div
            className="bg-secondary min-h-[280px] py-5 px-12 
          rounded-[20px] flex flex-col items-center justify-evenly"
          >
            <img className="w-20 h-20 object-contain" src={icon} />
            <h3 className="text-center text-[20px] font-bold">{title}</h3>
          </div>
        </div>
      </Tilt>
    </div>
  )
}
export default CardElement;