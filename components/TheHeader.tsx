import { Navigation } from "./Navigation"

const navItems = [
  {label: "Home", href: "/"},
  {label: "Post", href: "/post"},
  // {label: "About", href: "/about"}
]

const TheHeader = () => {
  return (
    <header className="flex items-center justify-around h-10 fixed top-0 left-0 min-w-full">
      <Navigation navLinks={ navItems } />
    </header>
  )
}

export {TheHeader}