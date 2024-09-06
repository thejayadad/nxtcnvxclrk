'use client'
import React, {useState} from 'react'

const Navbar = () => {
    const [active, setActive] = useState()
  return (
    <div className=''>
        <div className='max-w-screen-xl mx-auto flex justify-between p-[20px] border-b-[1px]'>
            <div className='text-[17px] lg:text-[34px] font-bold'>
                <span>FitMarketplace</span>
            </div>
            <div className='hidden lg:flex lg:gap-[24px] lg:items-center'>
            <span>Explore</span>
            <span>Sign In</span>
            <span>Become a Trainer</span>
            <button>Join</button>
        </div>
        <div className='block lg:hidden'>MENU</div>
        </div>
        {/* <hr />
        <div className='max-w-screen-xl mx-auto pt-[10px] pb-[10px] pl-[4px] pr-[4px] flex justify-between text-gray-600 border-t border-b border-neutral-200'>
            <span>Category 1</span>
            <span>Category 2</span> 
            <span>Category 3</span>
        </div> */}
    </div>
  )
}

export default Navbar