import Link from 'next/link'
import React from 'react'

export default function MenuItem({title, address, Icon}) {
  return (
    <div>
        <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600 '>
            <Icon className="lg:hidden text-2xl mx-4"/>
            <p className='hidden lg:inline my-2 text-sm'>{title}</p>
        </Link>
    </div>
  )
}
