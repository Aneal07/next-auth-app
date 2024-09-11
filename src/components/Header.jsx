import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-blue-300 to-red-400 shadow-lg'>
      <div className='max-w-6xl mx-auto flex justify-between items-center p-3'>
        <Link href='/' className='text-2xl font-extrabold group cursor=pointer'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-700 drop-shadow-md group-hover:from-400 group-hover:to-blue-600'>
            Auth
          </span>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-700 drop-shadow-md group-hover:from-400 group-hover:to-red-600'>
            App
          </span>
        </Link>
        <nav>
            <ul className='flex gap-4'>
                <Link href='/'>Home</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Sign in</Link>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
