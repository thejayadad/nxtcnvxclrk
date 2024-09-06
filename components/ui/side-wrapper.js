import React from 'react'

const SideWrapper = ({children}) => {
  return (
    <div className='w-full lg:block lg:w-[368px] lg:sticky lg:self-end lg:bottom-6'>
        <div className='h-24 lg:min-h-[calc(100vh-48px)] sticky top-6 flex flex-col gap-y-4' >
            {children}
        </div>
    </div>
  )
}

export default SideWrapper