import React from 'react';

const NewEventPage = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-6 py-8'>
      <h1 className='text-2xl font-bold text-gray-700 mb-6'>Add New Event</h1>
      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='flex-1 bg-white p-6 rounded-lg shadow-lg'>
          <div className='mb-4'>
            <label className='block text-gray-800 text-lg mb-2' htmlFor="title">Title</label>
            <input
              id="title"
              className='w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
              type="text"
              placeholder="Add the title of your event"
            />
          </div>
          
          <div className='mb-4'>
            <label className='block text-gray-800 text-lg mb-2' htmlFor="category">Category</label>
            <select
              id="category"
              className='w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value="hiit">HIIT</option>
              <option value="yoga">Yoga</option>
              <option value="functional">Functional</option>
              <option value="resistance">Resistance</option>
            </select>
          </div>
          
          <div className='mb-4'>
            <label className='block text-gray-800 text-lg mb-2' htmlFor="cover-image">Cover Image</label>
            <input
              id="cover-image"
              type="file"
              className='w-full p-2 border rounded-lg outline-none'
            />
          </div>
          
          <div className='mb-4'>
            <label className='block text-gray-800 text-lg mb-2' htmlFor="images">Upload Images</label>
            <input
              id="images"
              type="file"
              multiple
              className='w-full p-2 border rounded-lg outline-none'
            />
          </div>
          
          <div className='mb-4'>
            <label className='block text-gray-800 text-lg mb-2' htmlFor="description">Description</label>
            <textarea
              id="description"
              className='w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
              placeholder="Brief description to introduce your service to customers"
              rows="6"
            ></textarea>
          </div>
          
     </div>

        <div className='flex-1 bg-white p-6 rounded-lg shadow-lg'>
          <div className='mb-4'>
            <label className='block text-gray-800 text-lg mb-2' htmlFor="service-title">Service Title</label>
            <input
              id="service-title"
              className='w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
              type="text"
              placeholder="e.g. One-page web design"
            />
          </div>
          
          <div className='mb-4'>
            <label className='block text-gray-800 text-lg mb-2' htmlFor="short-description">Short Description</label>
            <textarea
              id="short-description"
              className='w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
              placeholder="Short description of your service"
              rows="6"
            ></textarea>
          </div>
          
          <div className='mb-4'>
            <label className='block text-gray-800 text-lg mb-2' htmlFor="delivery-time">Delivery Time</label>
            <input
              id="delivery-time"
              className='w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
              type="number"
              placeholder="e.g. 3 days"
            />
          </div>
          
          <div className='mb-4'>
            <label className='block text-gray-800 text-lg mb-2' htmlFor="revision-number">Revision Number</label>
            <input
              id="revision-number"
              className='w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
              type="number"
            />
          </div>
          
          <div className='mb-4'>
            <label className='block text-gray-800 text-lg mb-2' htmlFor="features">Add Features</label>
            <input
              id="features"
              className='w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 mb-2'
              type="text"
              placeholder="e.g. page design"
            />
            <input
              className='w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 mb-2'
              type="text"
              placeholder="e.g. file uploading"
            />
            <input
              className='w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 mb-2'
              type="text"
              placeholder="e.g. setting up a domain"
            />
            <input
              className='w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
              type="text"
              placeholder="e.g. hosting"
            />
          </div>
          
          <div className='mb-4'>
            <label className='block text-gray-800 text-lg mb-2' htmlFor="price">Price</label>
            <input
              id="price"
              className='w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
              type="number"
            />
          </div>
          <button className='w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewEventPage;
