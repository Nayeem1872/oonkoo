import React from 'react'
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className="py-4">
  <div className="mx-4 sm:mx-auto flex justify-between items-center">
    <div className="text-xl font-bold">
      <Image 
        src="/images/logo-77.png" 
        alt="Logo Image" 
        width={80} 
        height={80} 
        className="rounded-full object-cover"
      />
    </div>
    <div className="flex items-center">
      <Image 
        src="/images/Photo by Bailey Burton.png" 
        alt="Profile Image" 
        width={40} 
        height={40} 
        className="rounded-full object-cover"
      />
    </div>
  </div>
</nav>

  )
}

export default Nav