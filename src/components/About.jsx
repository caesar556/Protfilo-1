import { styles } from '../utils/styles';
import { Sectionwrapper } from '../hooks';
import { services } from '../constants/constants';
import CardElement from './Card';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#text-animation",
      { scale: 0.8, opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#text-animation",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#p-animation",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#p-animation",
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  });

  return (
    <section id="about" >
      <div id='text-animation' className="special-font">
        <p className={`${styles.sectionSubText} `} >Introduction</p>
        <h2 className={`${styles.sectionHeadText} `} ><b>O</b>verview.</h2>
      </div>
      <p id='p-animation' className="text-third max-w-3xl leading-[30px] text-[17px] mt-4" >
        I'm a backend developer with experience in
        JavaScript, and expertise in frameworks like React, Node.js, and
        Express and mongo DB. I'm a quick learner and create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        welcome in my virtual world ♤
      </p>
      <div className="flex flex-wrap gap-10 mt-20" >
        {services.map((e, i) => (
          <CardElement key={e.title} index={i} {...e} />
        ))}

      </div>
    </section>
  )
}

export default Sectionwrapper(About, "about");