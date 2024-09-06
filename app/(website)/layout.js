import Navbar from '@/components/navbar/navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className=''>
      <Navbar />
        {children}
    </div>
  )
}

export default layout