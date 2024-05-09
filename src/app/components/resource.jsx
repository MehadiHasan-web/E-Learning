import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Resource = () => {
  return (
    <div className=''>
      {/* content section start */}
      <div className='bg-[#fff6f4]'>
        <div className='container mx-auto p-5 lg:px-12 xl:px-10 xl:pt-14 '>
          <div className='md:flex md:justify-center md:items-center xl:px-10'>
            {/* content section start */}
            <div className='w-full md:w-1/2 space-y-2'>
              <h3 className='text-2xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-4xl font-bold'>Learn at your own pace,<br></br>
              with <span className='text-orange-600'>lifetime access</span> on<br></br>
              mobile and desktop
              </h3>
              <p className='text-sm sm:text-base md:text-sm lg:text-base xl:text-base 2xl:text-lg text-gray-400 w-4/5 md:w-full 2xl:w-4/5'>Morbi blandit tortor est, in tempor tellus fermentum sed quam id commodo nibh, quis pretium nulla nunc dignissim.</p>
              <ul className='flex items-center  gap-2'>
                <li><LocalPhoneIcon className='text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl'></LocalPhoneIcon></li>
                <li className='text-base sm:text-lg md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-orange-600'>+88 (0) 123 456 789</li>
              </ul>
            </div>
            {/* content section end */}
            {/* form section start */}
            <div className='w-full md:w-1/2 mt-5'>
              <div className='bg-white rounded-xl shadow-xl  p-10 md:p-5 lg:p-8 xl:p-10 2xl:p-12 -mb-14'>
                <h3 className='text-2xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold mb-5'>Book for free <span className='text-orange-600'>Resources</span></h3>
                <form className='space-y-5'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <input type='text' name="" className='w-full focus-visible:outline-none py-2 pl-5 rounded-full shadow-md' placeholder='First Name'></input>
                    <input type='text' name="" className='w-full focus-visible:outline-none py-2 pl-5 rounded-full shadow-md' placeholder='Last Name'></input>
                  </div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <input type='email' name="" className='w-full focus-visible:outline-none py-2 pl-5 rounded-full shadow-md' placeholder='Email Address'></input>
                    <input type='text' name="" className='w-full focus-visible:outline-none py-2 pl-5 rounded-full shadow-md' placeholder='Subject'></input>
                  </div>
                  <div className='grid grid-cols-1 gap-5'>
                    <textarea type="textarea" name="" className='w-full focus-visible:outline-none py-2 pl-5 rounded-2xl shadow-md h-32' placeholder='Email Address'></textarea>
                  </div>
                  <div className='grid grid-cols-1 gap-5'>
                  <input type='submit' value="BOOK NOW" className='w-full md:w-[30%] rounded-full shadow-xl bg-orange-600 text-sm sm:text-base md:text-xs lg:text-sm xl:text-xs 2xl:text-base text-white py-3 font-bold' ></input>
                  </div>
                </form>
              </div>
            </div>
            {/* form section end */}
          </div>
        </div>
      </div>
      {/* content section end */}
      {/* bottom section start */}
      <div className='h-20'>
      </div>
      {/* bottom section end */}
    </div>
  );
};

export default Resource;