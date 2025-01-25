import { technologies } from '../constants/constants';
import { Sectionwrapper } from '../hooks/';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#icon-anime",
      { rotateY: 360 },
      {
        rotateY: 0,
        duration: 5,
        ease: "power3.inOut",
        repeat: -1
      }
    );
    gsap.fromTo(
      ".scroll-anime",
      { opacity: 0.3, rotate: 180 },
      {
        rotate: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".scroll-anime",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, [])
  return (
    <section className="flex gap-x-20 gap-y-14 flex-wrap justify-center p-3">
      {
        technologies.map((technology) => (
          <div id="icon-anime" className={`shadow-2xl shadow-black w-24 h-24 border-2 ${technology.borderColor} text-center rounded-full p-4 bg-black scroll-anime`} key={technology.name}>
            <img src={technology.icon} />
          </div>
        ))
      }
    </section>
  )
}

export default Sectionwrapper(Tech, "");