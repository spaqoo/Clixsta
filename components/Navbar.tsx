"use client" // this is a client component
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import React from "react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Link from "next/link"

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)
  return (
    <header className={`w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow-lg ${currentTheme === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-black"} `}>
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <div className="container flex items-center space-x-2">
              
              {currentTheme === "dark" ? <img src="clixsta_light.webp" alt="" className='h-14' /> : <img src="clixsta.png" alt="" className='h-14' />}
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
           <Link href="/About" className="block lg:inline-block   hover:text-neutral-500 ">ABOUT</Link>

              <Menu>
                  <MenuHandler>
                  <div className="block lg:inline-block   hover:text-neutral-500 cursor-pointer">SERVICES</div>
                  </MenuHandler>
                  <MenuList>
                  <MenuItem><Link href="/Design">Website Design</Link></MenuItem>
                  <MenuItem><Link href="/Development">Website Development</Link></MenuItem>
                  <MenuItem><Link href="/Marketing">Digital Marketing</Link></MenuItem>
                  </MenuList>
                </Menu>

              <Link href="/Pricing" className="block lg:inline-block   hover:text-neutral-500 ">PRICING</Link>
              <Link href="/Portfolio" className="block lg:inline-block   hover:text-neutral-500 ">PORTFOLIO</Link>
              <Link href="/Career" className="block lg:inline-block   hover:text-neutral-500 ">CAREER</Link>
         <Link href="/Contact" className="block lg:inline-block   hover:text-neutral-500 ">CONTACT</Link>

              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}