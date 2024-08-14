import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);


  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>   
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eef4] px-10 py-3">
      <div className="flex items-center gap-4 text-[#0d151c]">
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em] ">
          Hubnex Educate
        </h2>
      </div>
      <div>
          <GiHamburgerMenu className=" sm:hidden mx-2 " onClick={toggleNav}  />
        </div>
      <div className={`flex flex-1 justify-end gap-8 max-sm:hidden `}>
     
        <div className="flex items-center gap-9">
          <a
            className="text-[#0d151c] text-sm font-medium leading-normal "
            href="#"
          >
            Home
          </a>
          <a
            className="text-[#0d151c] text-sm font-medium leading-normal"
            href="#"
          >
            Workshops
          </a>
          <a
            className="text-[#0d151c] text-sm font-medium leading-normal"
            href="#"
          >
            Services
          </a>
          <a
            className="text-[#0d151c] text-sm font-medium leading-normal"
            href="#"
          >
            Sign In
          </a>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2094f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
          <a href="Get Started">
            {" "}
            <span className="truncate">Get Started</span>
          </a>
        </button>
      </div>
     
    </header>
    <div
        className={`flex w-full space-y-2    flex-col items-center justify-between sm:hidden bg-blue-50 transition-all duration-500 ${
          isNavOpen ? `block` : `hidden`
        } `}
      >
        <a to={"/"}>Home</a>
        <a to={"/Services"}>  Workshops</a>
        <a to={"/Blog"}>  Services</a>
        <a to={"/About"}>   Sign In</a>
      </div></div>
  )
}

export default NavBar