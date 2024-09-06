import React from 'react';

const users = [
  {
    id: 1,
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    email: 'user1@example.com',
    time: '10:30 AM',
  },
  {
    id: 2,
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    email: 'user2@example.com',
    time: '11:15 AM',
  },
  // Add more users as needed
];

const SideBar = () => {
  return (
    <div className='h-[100vh] p-4 bg-slate-50'>
      <div className='flex flex-col gap-4 h-full'>
        {users.map((user) => (
          <div
            key={user.id}
            className='flex items-center gap-4 lg:p-2 bg-white rounded-lg shadow-sm hover:bg-gray-200'
          >
            <img
              src={user.image}
              alt='User'
              className='w-12 h-12 rounded-full object-cover'
            />
            <div className='hidden lg:flex flex-col'>
              <span className='text-[10px] font-bold text-gray-800 '>{user.email}</span>
              <span className='text-[8px] text-gray-600'>{user.time}</span>
            </div>
            <div className='lg:hidden'>
              <span className='sr-only'>{user.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
