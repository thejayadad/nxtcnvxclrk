import PageWrapper from '@/components/ui/page-wrapper';
import SideWrapper from '@/components/ui/side-wrapper';
import React from 'react';
import { FiStar } from 'react-icons/fi';

const SingleEventPage = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-6 py-8'>
      <div className='flex flex-col lg:flex-row-reverse gap-[48px] px-6'>
        <SideWrapper>
          <div className='bg-gray-100 p-4 rounded-lg sticky top-6 shadow-sm'>SideWrapper</div>
        </SideWrapper>
        <PageWrapper>
          <div className='flex flex-col gap-[32px]'>
            <div>
              <span className='font-medium text-[14px] text-gray-600 uppercase'>CATEGORY</span>
              <h1 className='text-3xl font-bold mt-2'>Event Title</h1>
            </div>
            <div className='flex items-center gap-[10px]'>
              <img
                className='w-[40px] h-[40px] rounded-full object-cover'
                src='https://images.pexels.com/photos/18037979/pexels-photo-18037979/free-photo-of-young-woman-in-a-summer-outfit-and-a-hat-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt='user'
              />
              <span className='font-semibold text-lg'>User Name</span>
              <div className='flex items-center gap-[5px]'>
                <FiStar className='h-5 w-5 text-yellow-500' />
                <FiStar className='h-5 w-5 text-yellow-500' />
                <FiStar className='h-5 w-5 text-yellow-500' />
                <FiStar className='h-5 w-5 text-yellow-500' />
                <FiStar className='h-5 w-5 text-yellow-500' />
                <span className='text-[14px] font-bold text-gray-600'>5.0</span>
              </div>
            </div>
            <div className='max-h-[500px] overflow-hidden rounded-lg'>
              <img
                className='w-full h-full object-cover'
                src="https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="event"
              />
            </div>
            <div>
              <h2 className='text-2xl font-semibold mb-2'>About The Event</h2>
              <p className='text-gray-900 font-light leading-[25px]'>
                Join our serene yoga class designed to help you find balance and tranquility. Our experienced instructors will guide you through a series of gentle poses and breathing exercises aimed at improving flexibility, reducing stress, and enhancing overall well-being. Whether you're a beginner or an experienced yogi, this class offers a calming environment to reconnect with your body and mind. Experience the transformative power of yoga in a supportive and nurturing setting.
              </p>
            </div>
            <div>

  
              <div className='border-[1px] border-gray-300 rounded-lg p-[20px] mt-[20px]'>
              <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
  <h2 className='text-2xl font-semibold mb-4'>About The Author</h2>
  <div className='flex flex-col gap-[20px]'>
    <div className='flex items-center gap-[10px]'>
      <img
        className='w-[60px] h-[60px] rounded-full object-cover'
        src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="author"
      />
      <div className='flex flex-col'>
        <span className='text-xl font-semibold'>Jane Doe</span>
        <span className='text-gray-600'>Certified Fitness Trainer</span>
        <div className='flex items-center gap-[5px] mt-1'>
          <FiStar className='h-5 w-5 text-yellow-500' />
          <FiStar className='h-5 w-5 text-yellow-500' />
          <FiStar className='h-5 w-5 text-yellow-500' />
          <FiStar className='h-5 w-5 text-yellow-500' />
          <FiStar className='h-5 w-5 text-yellow-500' />
          <span className='text-gray-600 font-semibold'>4.9/5.0</span>
        </div>
      </div>
    </div>
    <div className='flex flex-col gap-[10px]'>
      <div className='flex justify-between'>
        <span className='font-medium text-gray-700'>Experience:</span>
        <span className='text-gray-600'>10 Years</span>
      </div>
      <div className='flex justify-between'>
        <span className='font-medium text-gray-700'>Specialty:</span>
        <span className='text-gray-600'>Yoga & Strength Training</span>
      </div>
      <div className='flex justify-between'>
        <span className='font-medium text-gray-700'>Certifications:</span>
        <span className='text-gray-600'>Certified Personal Trainer, Yoga Instructor</span>
      </div>
      <div className='flex justify-between'>
        <span className='font-medium text-gray-700'>Location:</span>
        <span className='text-gray-600'>New York, USA</span>
      </div>
  </div>
  </div>
</div>

                <hr />
                <p className='text-gray-900 font-light leading-[25px] mt-[10px]'>
                  My name is Anna, I enjoy creating AI generated art in my spare time. I have a lot of experience using the AI program and that means I know what to prompt the AI with to get a great and incredibly detailed result.
                </p>
              </div>
            </div>
            <div className='reviews'>
              <h2 className='text-2xl font-semibold mb-2'>Reviews</h2>
              <div className='flex flex-col gap-[20px]'>
                <div className='border border-gray-300 rounded-lg p-4'>
                  <div className='flex items-center gap-[10px]'>
                    <img
                      className='w-[40px] h-[40px] rounded-full object-cover'
                      src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                    <div className='flex flex-col'>
                      <span className='font-semibold text-lg'>Davidddd</span>
                      <div className='flex items-center gap-[5px]'>
                        <FiStar className='h-5 w-5 text-yellow-500' />
                        <FiStar className='h-5 w-5 text-yellow-500' />
                        <FiStar className='h-5 w-5 text-yellow-500' />
                        <FiStar className='h-5 w-5 text-yellow-500' />
                        <FiStar className='h-5 w-5 text-yellow-500' />
                        <span className='text-[14px] font-bold text-gray-600'>5.0</span>
                      </div>
                    </div>
                  </div>
                  <p className='mt-2 text-gray-700'>
                    I just want to say that art_with_ai was the first, and after this, the only artist I'll be using on Fiverr. Communication was amazing, each and every day he sent me images that I was free to request changes to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that I'll be using it again very very soon.
                  </p>
                  <div className='flex items-center gap-[10px] mt-2'>
                    <span className='text-sm font-medium text-gray-600'>Helpful?</span>
                    <img src="/img/like.png" alt="like" className='w-5 h-5' />
                    <span className='text-sm font-medium text-gray-600'>Yes</span>
                    <img src="/img/dislike.png" alt="dislike" className='w-5 h-5' />
                    <span className='text-sm font-medium text-gray-600'>No</span>
                  </div>
                </div>
                <div className='border border-gray-300 rounded-lg p-4'>
                  <div className='flex items-center gap-[10px]'>
                    <img
                      className='w-[40px] h-[40px] rounded-full object-cover'
                      src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                    <div className='flex flex-col'>
                      <span className='font-semibold text-lg'>Davidddd</span>
                      <div className='flex items-center gap-[5px]'>
                        <FiStar className='h-5 w-5 text-yellow-500' />
                        <FiStar className='h-5 w-5 text-yellow-500' />
                        <FiStar className='h-5 w-5 text-yellow-500' />
                        <FiStar className='h-5 w-5 text-yellow-500' />
                        <FiStar className='h-5 w-5 text-yellow-500' />
                        <span className='text-[14px] font-bold text-gray-600'>5.0</span>
                      </div>
                    </div>
                  </div>
                  <p className='mt-2 text-gray-700'>
                    I just want to say that art_with_ai was the first, and after this, the only artist I'll be using on Fiverr. Communication was amazing, each and every day he sent me images that I was free to request changes to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that I'll be using it again very very soon.
                  </p>
                  <div className='flex items-center gap-[10px] mt-2'>
                    <span className='text-sm font-medium text-gray-600'>Helpful?</span>
                    <img src="/img/like.png" alt="like" className='w-5 h-5' />
                    <span className='text-sm font-medium text-gray-600'>Yes</span>
                    <img src="/img/dislike.png" alt="dislike" className='w-5 h-5' />
                    <span className='text-sm font-medium text-gray-600'>No</span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </PageWrapper>
      </div>
    </div>
  );
};

export default SingleEventPage;
