import React from 'react'
import SideBar from './_components/sidebar/sidebar'
import MobileSidebar from './_components/sidebar/mobile-sidebar'
import MessageWrapper from './_components/ui/message-wrapper'

const layout = ({children}) => {
  return (
    <div className='mx-auto max-w-screen-xl px-6'>
      <div className='flex'>
      <MessageWrapper>
      <div className='border-r-[1px]'>
        <SideBar />
      </div>
      </MessageWrapper>
        <main className='h-[100vh] w-full'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default layout