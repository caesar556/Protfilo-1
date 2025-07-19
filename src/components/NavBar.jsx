import { useState, useEffect } from "react";
import { authLogo } from '../assets';
import { styles } from "../utils/styles";
import { navLinks } from '../constants/constants';
import MobileNav from './MobileNav';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const NavBar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    gsap.fromTo(
      "#p-nav",
      { opacity: 0, y: 20, x: 30 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        stagger: 0.7,
        duration: 2,
        ease: 'power3.inOut',
      }
    );
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])
  useEffect(() => {
    const animation = gsap.fromTo(
      "#header-anmation",
      { opacity: 0, y: -80 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.7,
        duration: 1.1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: "#header-animation",
          start: "top 80%",
          end: "top 50%",
        },
      }
    );
    return () => {
      animation.scrollTrigger.kill();
    }
  }, [scrolled])
  return (
    <header
      id={`${scrolled ? "header-anmation" : ""}`}
      className={`
      ${styles.paddingNav} 
      fixed w-full z-[200] transition duration-400
      ${scrolled ? "header-nav  border-b-2 border-b-red-700" : "bg-transparent"}`}
    >
      <nav className="flex justify-between max-w-7xl items-center mx-auto ">
        <div
          className=" flex items-center gap-3"
          onClick={
            () => {
              setActive("");
              window.scrollTo(0, 0);
            }
          }
        >
          <img className="w-14 h-14 object-contain border-2 border-red-800 rounded-full" src={authLogo} />
          <p id="p-nav" className="text-[18px] cursor-pointer text-white font-bold flex special-font">
            Belal&nbsp;
            <b className='sm:block hidden text-[#ff0000] '>♤ Hussien</b>
          </p>
        </div>
        <ul className="list-none sm:flex hidden flex-row gap-6 items-center ">
          {navLinks.map((e) => (
            <li key={e.id}>
              <a
                className={`
                  ${active === e.title ? "text-white" : "text-third"}
                  text-[16px] font-medium cursor-pointer 
                  transition duration-400 hover-nav
                  shadow shadow-black py-2.5 px-5 rounded-lg`
                }
                onClick={() => setActive(e.title)}
                href={`#${e.id}`}
              >
                {e.title}
              </a>
            </li>
          ))}
        </ul>
        <MobileNav />
      </nav>
    </header>
  )
}

export default NavBar;
