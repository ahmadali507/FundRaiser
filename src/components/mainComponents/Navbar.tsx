import { GiftIcon } from '@/app/utils/IconSvgs'
import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-800">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <GiftIcon className="h-6 w-6 text-white" />
          <span className="sr-only">Fundraising Website</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 flex-row items-center">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-12  text-gray-300" prefetch={false}>
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4 text-gray-300" prefetch={false}>
            About
          </Link>
          <Link href="/contactUs" className="text-sm font-medium hover:underline underline-offset-4 text-gray-300" prefetch={false}>
            Contact Us
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md md:bg-secondary md:text-black px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-slate-200 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Donate
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
