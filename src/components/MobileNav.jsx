import { useState } from "react";
import { navLinks } from "../constants/constants";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const MobileNav = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  const clickToggle = () => setToggle((perv) => !perv);

  return (
    <section className="sm:hidden flex flex-1 justify-end items-center">
      <div
        className={`
        ${toggle ? "hover:border-violet-900 hover:text-violet-900"
            : "hover:border-red-600 hover:text-red-600"
          }
        transition text-white duration-400
        border-2 p-2 rounded-md`
        }
        onClick={clickToggle}
      >
        {toggle ? <IoCloseSharp className="text-[22px] text-red-700" /> : <RiMenu3Line className="text-[22px]" />}
      </div>
      <div className={
        `${!toggle ? "hidden" : "flex"}
        p-6 black-gradient absolute top-20 right-0 z-50 mx-4 rounded-xl my-2 min-w-[140px]
        `
      }>
        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-9">
          {navLinks.map((e) => (
            <li key={e.id}>
              <a className={`
                  ${active === e.title ? "text-white" : "text-third"}
                  text-[16px] font-medium cursor-pointer 
                  transition duration-400 hover-mobile-nav
                  shadow shadow-slate-950 py-2.5 px-5 rounded-lg`
                }
                onClick={() => setActive(e.title)}
                href={`#${e.id}`}>
                {e.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default MobileNav;