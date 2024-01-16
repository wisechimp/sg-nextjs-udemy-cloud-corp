"use client"
import Link from "next/link"
import { useRef, useState } from "react"
import { useClickAway } from "react-use"

import menudata from "@/app/data/menu"
import Hamburger from "hamburger-react"
import { AnimatePresence, motion } from "framer-motion"

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  
  useClickAway(dropdownRef, () => setIsOpen(false))

  return (
    <div className='flex items-center justify-between md:hidden bg-primaryContrast'>
      <Link className='pl-4 text-primaryLight' href='/'>
        Home
      </Link>
      <div ref={dropdownRef}>
        <Hamburger
          toggled={isOpen}
          size={20}
          color='#ffffff'
          toggle={setIsOpen}
        />
        <AnimatePresence>
          {isOpen && (
            <motion.nav 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='fixed left-0 shadow-4xl right-0 p-5 pt-0 bg-primaryDark z-10'
            >
              <ul className='p-1'>
                {menudata.map((page, i) => {
                  const { title, link } = page
                  return (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + i/10,
                      }}
                      key={i}
                      className='w-full mt-4 rounded-xl bg-primaryContrast'
                    >
                      <Link
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={
                          "flex items-center justify-between w-full p-5 rounded-xl bg-primaryContrast"
                        }
                        href={link}
                      >
                        <span className='flex gap-1 text-lg text-primaryLight'>
                          {title}
                        </span>
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MenuMobile