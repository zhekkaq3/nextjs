'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
}

type Props = {
  navLinks: NavLink[];
}

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map(link => {
        const isActive = pathname === link.href;

        return (
          <Link key={link.label} href={link.href} className={`${isActive ? "active" : ""} text-xl font-bold text-gray-700 uppercase`}>
            {link.label}
          </Link>
        )
      })}
    </>
  )
}

export {Navigation};
