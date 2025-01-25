import { logo } from '../assets';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const Footer = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#icons-anime",
      { opacity: 0.3 },
      {
        opacity: 1,
        duration: 4,
        ease: "power4.out",
        repeat: -1
      }

    )
  }, [])
  return (
    <footer className="py-2 px-4 bg-black flex justify-between">
      <div id="icons-anime" className="flex gap-4 items-center w-1/2 px-3">
        <img className="w-12 h-12 object-contain border-2 border-purple-800 rounded-full" src={logo} />
        <p className=" text-[18px] w-full cursor-pointer text-white font-bold flex items-center special-font">
          Belal&nbsp;
          <b className='sm:block hidden text-[#ff0000] '>♤ Hussien</b>
        </p>
      </div>
      <div className="flex items-center w-1/3 justify-end">
        <ul id="icons-anime" className="flex gap-5 cursor-pointer text-[19px] text-[#ff0000]">
          <li><a href="https://www.facebook.com/share/18DdZfRToZ/"><FaFacebook /></a></li>
          <li><a href="https://x.com/Belal89493?t=tPSca07VaNANeFNIMC0mIA&s=08"><FaXTwitter /></a></li>
          <li><a href="https://github.com/caesar556"><FaGithub /></a></li>
          <li><a href="www.linkedin.com/in/belal-hussien-351873289"><FaLinkedin /></a></li>

        </ul>
      </div>
    </footer>
  )
}

export default Footer;