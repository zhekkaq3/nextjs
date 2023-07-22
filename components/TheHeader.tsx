import Link from "next/link"

const TheHeader = () => {
  return (
    <header className="flex items-center justify-around h-10 bg-blue-200 fixed top-0 left-0 min-w-full">
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/blog'>Blog</Link>

    </header>
  )
}

export {TheHeader}