import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='flex justify-center items-center h-16 bg-black text-white'>
      <div className='text-center'>
        <p>© 2024 Selman-s</p>
        <p>Developed by <Link href="https://www.selmansahbudak.com.tr/" target="_blank">Selman Sahbudak</Link></p>
      </div>
    </div>

  )
}
