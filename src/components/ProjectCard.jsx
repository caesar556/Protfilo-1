import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import { FaGithub } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  name,
  image,
  description,
  tags,
  index,
  source_code_link,
  secUrl,
}) => {
  const cardRef = useRef(null);
  useEffect(() => {
    const refElement = cardRef.current;
    const animation = gsap.fromTo(
      refElement,
      { opacity: 0, x: -80, scale: 0.2 },
      {
        x: 0,
        scale: 1,
        duration: 1,
        opacity: 1,
        delay: index * 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: refElement,
          start: "top 90%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      },
    );
    return () => {
      animation.scrollTrigger.kill();
    };
  }, []);
  return (
    <Tilt>
      <div
        ref={cardRef}
        className="shadow-card p-[1px] rounded-2xl green-pink-gradient"
      >
        <section className="w-[400px] h-min-[400] card-color flex flex-col items-center p-3 rounded-2xl">
          <div className="w-full  h-[240px]">
            <img
              className=" object-cover h-full w-full rounded-2xl"
              src={image}
            />
          </div>
          <div className="py-3 px-3">
            <h2 className="text-white font-bold text-[22px] mb-2 uppercase">
              <a href={secUrl}>{name}</a>
            </h2>
            <p className="text-[14px] text-third">{description}</p>
          </div>
          <div className="w-full flex justify-between items-center px-2 py-3">
            <a
              className="text-[23px] cursor-pointer hover:text-red-600 transition duration-200"
              href={source_code_link}
            >
              <FaGithub />
            </a>
            <div className="flex gap-2">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[13px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Tilt>
  );
};
export default ProjectCard;
