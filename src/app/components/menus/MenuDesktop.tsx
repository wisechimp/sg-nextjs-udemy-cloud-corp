import Link from "next/link"
import menudata from "../../data/menu"

const MenuDesktop = () => {
  return (
    <div className='hidden md:flex justify-between items-center h-12 bg-primaryContrast text-primaryLight'>
      <Link className='pl-4' href='/'>
        Home
      </Link>
      <nav className='flex justify-between w-72'>
        {menudata.map((page, i) => (
          <Link key={i + 100} href={page.link} className='pr-4'>
            {page.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default MenuDesktop