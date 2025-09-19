import { MapPin } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div className='bg-white py-3 shadow-2xl'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
            {/* Logo Section */}
            <div className=''>
                <Link to={'/'}><h1 className='font-bold text-3xl'><span className='text-red-500 font-serif'>BS</span> Shopping</h1></Link>
                <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>
                    <MapPin className='text-red-500'/>
                    <span className='font-semibold'>
                        {location ? <div> </div>:"Add Address"}
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default navbar
