"use client"
import Link from "next/link";
import { ReactNode } from "react";
import { switchStyles } from "@utils/stylingHelpers";

function NavLink({ href, children, active = false }: { href: string, children: ReactNode, active?: boolean }) {
  return (
    <li>
      <Link
        href={href}
        className={switchStyles(
          {
            base: 'px-3 py-2 transition rounded-lg'
          },
          active,
          {
            base: 'text-blue-600 bg-blue-500/10 ring-2 ring-blue-500 ring-inset',
            focus: 'focus:outline-none'
          },
          {
            hover: 'hover:text-blue-600 hover:bg-blue-500/10',
            focus: 'focus:text-blue-600 focus:outline-none focus:bg-blue-500/10 focus:bg-blue-500/10 focus:ring-2 focus:ring-blue-500 focus:ring-inset'
          }
        )}
      >{children}</Link>
    </li>
  )
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full shadow">
      <div className="w-full max-w-3xl px-4 mx-auto sm:px-6 md:px-8">
        <nav className="flex items-center justify-center h-14">
          <ul className="items-center hidden space-x-3 text-sm font-medium text-gray-300 md:flex">

            <NavLink href='/foo' active>foo</NavLink>
            <NavLink href='/dashboard'>Dashboard</NavLink>
            <NavLink href='/sites'>Sites</NavLink>
            <NavLink href='/teams'>Teams</NavLink>

          </ul>
        </nav>
      </div>
    </header>
  )
}
