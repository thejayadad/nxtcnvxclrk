import React from 'react'

const MessageWrapper = ({children}) => {
  return (
    <div className='w-24 lg:w-64 lg:sticky lg:self-start'>
        <div className='h-24 lg:min-h-[calc(100vh-48px)] sticky top-6 flex flex-col gap-y-4' >
        {children}
        </div>
    </div>
  )
}

export default MessageWrapper