import Link from "next/link"

const Header = () => {
  return (
    <div className="flex justify-between p-2 bg-primaryContrast text-primaryLight">
      <Link href='/'>Home</Link>
      <div className="flex justify-between w-1/4">
        <Link href='/performance'>Performance</Link>
        <Link href='/reliability'>Reliability</Link>
        <Link href='scale'>Scale</Link>
      </div>
    </div>
  )
}

export default Header