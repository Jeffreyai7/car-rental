import Link from 'next/link'
import React from 'react'
import Button from '../atoms/Button'
import Logo from '../atoms/Logo'

const NavBar = () => {
  return (
    <nav className='flex justify-between w-11/12 mx-auto h-20 py-2 ' >
    <div><Logo/></div>
    <ul className='flex items-center justify-between w-2/4' >
      <li><Link href={"/"}>Home</Link></li>
      <li><Link href={"/about"}>About Us</Link></li>
      <li><Link href={"/"}>Vehicle</Link></li>
      <li>Testimonials</li>
      <li>Contact</li>
    </ul>
    <div className='flex w-[25%] gap-4'>
      <Button>Sign in</Button>
      <Button className='bg-orange-500' >Register</Button>
    </div>
    </nav>
  )
}

export default NavBar