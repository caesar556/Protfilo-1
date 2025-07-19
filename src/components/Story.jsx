import { useState, useRef } from "react"
import { styles } from '../utils/styles';
import Loader from './Loader';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from '../constants/constants';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { authLogo } from '../assets';


gsap.registerPlugin(ScrollTrigger);

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#6A0000",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #7A0000" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[14px] sm:text-[20px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[10px] sm:text-[14px] font-semibold overflow-hidden'
          style={{ margin: 0 }}
        >
        </p>
      </div>

      <ul className='mt-3 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[10px] sm:text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


const Story = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  }
  const textRef = useRef(null);
  useGSAP(() => {
    const text = textRef.current;

    const splitText = text.innerText
      .split('')
      .map(char => `<p class="inline-block">${char === ' ' ? '&nbsp;' : char}</p>`)
      .join('');

    text.innerHTML = splitText;

    gsap.fromTo(
      text.querySelectorAll('p'),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.05,
        duration: 2.6,
        ease: 'power3.inOut',
        repeat: -1
      }
    );
    gsap.fromTo(
      "#txt-animation",
      { scale: 0.8, opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#txt-animation",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#timeline-anime",
      { opacity: 0, x: -200 },
      {
        x: 0,
        opacity: 2,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#timeline-anime",
          start: "top 90%",
          end: "bottom 90%",
          scrub: true,
        },
      }
    );
  })

  return (
    <section className="h-screen relative overflow-hidden">
      <div className="inset-0 h-full w-full absolute">
        {
          isLoading &&
          <Loader />
        }
        <video
          className="object-cover h-full w-full"
          src="/videos/story.mp4" type="video/mp4"
          autoPlay
          loop
          preload="auto"
          poster={authLogo}
          muted
          onLoadedData={handleLoading}
        />
      </div>
      <div className=" z-20 absolute w-full flex flex-col items-center h-full">
        <div id="txt-animation" className="special-font w-full text-center py-5 tracking-widest">
          <p ref = {textRef} className={`${styles.sectionSubText}`}>Welcome in my world</p>
          <h2  className={`${styles.sectionHeadText}`}><b>m</b>y <b>s</b>tory.</h2>
        </div>
        <div id="timeline-anime" className="w-full">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>

      </div>
    </section>
  )
}
export default Story;
