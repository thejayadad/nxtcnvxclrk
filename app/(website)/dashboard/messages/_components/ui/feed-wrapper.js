import React from 'react'

const FeedWrapper = ({children}) => {
  return (
    <div className='flex-1 relative top-0 pb-10 '>
      {children}
    </div>
  )
}

export default FeedWrapper