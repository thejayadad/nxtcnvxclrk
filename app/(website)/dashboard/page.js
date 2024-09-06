import Link from 'next/link'
import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'

const DashboardPage = () => {
  return (
    <div className=' text-gray-500'>
    <div className='mx-auto max-w-screen-xl px-6 py-8'>
        <div className='flex justify-between'>
                <h1>Events</h1>
                <Link href={'/'}>
                    <button>Add Event</button>
                </Link>
            </div>
            <table className='w-full border-[1px] p-2'>
                <thead>
                <tr className='h-[50px] '>
                    <th className='text-left'>Image</th>
                    <th className='text-left'>Title</th>
                    <th className='text-left'>Price</th>
                    <th className='text-left'>Sales</th>
                    <th className='text-left'>Action</th>
                </tr>
                </thead>
                <tr>
                    <td>
                    <img
                        className="w-[50px] h-25px] object-cover"
                        src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    </td>
                    <td>Stunning concept art</td>
            <td>59</td>
            <td>13</td>
            <td>
              <FiMoreHorizontal className='h-4 w-4 text-gray-600' />
            </td>
                </tr>
            </table>
       </div>
    </div>
  )
}

export default DashboardPage