import { Sectionwrapper } from '../hooks';
import { styles } from '../utils/styles';
import ProjectCard from './ProjectCard';
import { projects } from '../constants/constants';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#h-project-animation",
      { scale: 0.8, opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#h-project-animation",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#p-project-animation",
      { opacity: 0, y: 50, x: -120 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#p-project-animation",
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  });
  return (
    <section>
      <div className="special-font mb-8" >
        <p id="p-project-animation" className={`${styles.sectionSubText}`}>My work</p>
        <h2 id="h-project-animation" className={`${styles.sectionHeadText}`}><b>p</b>rojects.</h2>
        <p id="p-project-animation" className="text-third max-w-3xl leading-[30px] text-[17px] mt-4">
          A collection of my work showcasing expertise in front-end development,
          UI/UX design, and backend integration. Each project demonstrates my ability to build responsive,
          user-friendly interfaces and implement efficient backend solutions using modern web technologies.
        </p>
      </div>
      <div className="p-3 flex gap-14 flex-row justify-around flex-wrap" >
        { projects.map((e, i) => (
          <ProjectCard key = {e.name} index={i} { ...e} />
        ))}
        

      </div>

    </section>
  )
}
export default Sectionwrapper(Projects, "projects");