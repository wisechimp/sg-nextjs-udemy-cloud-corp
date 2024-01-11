import Link from "next/link"
import menudata from "../../data/menu"

const MenuDesktop = () => {
  return (
    <div className="hidden md:flex justify-between items-center h-12 p-2 bg-primaryContrast text-primaryLight">
      <Link href='/'>Home</Link>
      <div className="flex justify-between w-60">
        {menudata.map((page, i) => (
          <Link key={i + 100} href={page.link}>{page.title}</Link>
        ))}
      </div>
    </div>
  )
}

export default MenuDesktop