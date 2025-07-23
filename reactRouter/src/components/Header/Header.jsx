import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
    {path:'', name:'Home'},
    {path:'about', name:'About'},
    {path:'contact-us', name:'Contact Us'},
    {path:'github', name:'Github'}
]


const Header = () => {
  return (
    <div className='w-full h-24 flex justify-evenly px-5 py-4 items-center border-b-1 border-gray-300'>
      <div className='text-3xl font-bold'>
        <Link>
            <h1>Your <span className='text-orange-500'>Logo</span></h1>
        </Link>
      </div>
      <div>
        <ul className='flex gap-10 font-bold cursor-pointer'>
            {navLinks.map((link, index)=>(
                <NavLink to={link.path} key={index}>
                    {link.name}
                </NavLink>
            ))}
        </ul>
      </div>
      <div className='flex gap-10 items-center'>
        <Link className='font-bold'>Login</Link>
        <Link>
            <button className='font-bold text-white px-6 py-3 bg-orange-500 rounded-xl cursor-pointer'>Get Started</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
