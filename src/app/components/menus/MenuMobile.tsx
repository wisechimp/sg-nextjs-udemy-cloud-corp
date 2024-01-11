"use client"
import menudata from "@/app/data/menu"
import Hamburger from "hamburger-react"
import Link from "next/link"
import { useRef, useState } from "react"

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  
  return (
    <div ref={dropdownRef} className='md:hidden bg-primaryContrast'>
      <Hamburger toggled={isOpen} size={20} color="#ffffff" toggle={setIsOpen} />
      {isOpen && (
        <div className='fixed left-0 shadow-4xl right-0 p-5 pt-0 bg-primaryDark'>
          <ul className="p-1">
            {menudata.map((page, i) => {
              const { title, link } = page
              return (
                <li
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
                    <span className='flex gap-1 text-lg text-primaryLight'>{title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default MenuMobile