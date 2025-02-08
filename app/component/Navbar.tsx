'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { ModeToggle } from '@/components/ui/theme-btn';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white z-10 sticky mb-48 top-0 bg-opacity-10 backdrop-blur-lg  p-4 rounded-lg shadow-lg">
      <div className="container   mx-auto flex justify-between ">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">Mohammed-Blog</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-gray-400 hover:scale-110 transition">Home</Link>
          <Link href="/blog" className="hover:text-gray-400 hover:scale-110 transition">Blog</Link>
          <Link href="/about" className="hover:text-gray-400 hover:scale-110 transition">About</Link>
          <Link href="/contact" className="hover:text-gray-400 hover:scale-110 transition">Contact</Link>
           <Button variant="outline">Login</Button>
           <Button variant="outline">SignUp</Button>
           <Button variant="outline"><ModeToggle/></Button>

        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2 p-4 bg-gray-500  rounded-lg">
          <Link href="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/blog" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>
          <div className='flex gap-3'>
          <Link href="/login" className="" onClick={() => setIsOpen(false)}>           <Button variant="outline">Login</Button></Link>
          <Link href="/contact" className="" onClick={() => setIsOpen(false)}>           <Button variant="outline">SignUp</Button>
          </Link>
          <ModeToggle/>
          </div>

        </div>
      )}

    </nav>
  );
}