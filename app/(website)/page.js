import Eventcard from '@/components/card/event-card'
import React from 'react'

const HomePage = () => {
  return (
    <div className='mx-auto max-w-screen-xl'>
          <div className='flex flex-col gap-[15px] w-full justify-between pt-[30px] pb-[30px] px-6'>
      <div>
        <span className='text-gray-600 font-light text-[13px]'>FitEventMarket</span>
        <h1>Trainers</h1>
        <p className='font-medium text-gray-900'>Explore 1000's of trainers ready to assist with your fitness needs</p>
      </div>
      <div className='flex items-center justify-between gap-[10px]'>
        <div>
          Left Price Filter
        </div>
        <div>
          Right Sort By
        </div>
      </div>

    </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />

      </div>
      </div>
  )
}
 
export default HomePage