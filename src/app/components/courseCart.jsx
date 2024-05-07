import Image from 'next/image';
import learningImg from '../../../public/courseCartImg/learning.png'
import { Avatar } from '@mui/material';

const CourseCart = () => {
  return (
    <div className='rounded-2xl bg-white shadow-2xl'>
      {/* cart content section start */}
      <div>
        {/* image section start */}
        <div className='h-50% w-full relative '>
          <Image src={learningImg} alt="learning image" className='rounded-t-3xl'></Image>
          <span className='absolute top-[10%] left-[5%] text-white bg-green-600 2xl:px-3 2xl:py-2 rounded-full 2xl:text-base'>Technology</span>
          <span className='z-10 absolute right-[5%] -bottom-[10%] bg-orange-600 text-white 2xl:text-xl rounded-full h-12 w-12 flex justify-center items-center shadow-2xl'>$55</span>
        </div>
        {/* image section end */}
        {/* content section start */}
        <div className='xl:p-6'>
          {/* person img & name */}
          <ul className='flex items-center gap-4'>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <span className='xl:text-base text-green-600'>Linda Bacote</span>
          </ul>
          {/* person img & name */}
          {/* title section start */}
          <h4 className='xl:text-xl font-semibold'>Expand your career opportunities with Python</h4>
          {/* title section end */}
          {/*  */}
        </div>
        {/* content section end */}
        <div>

        </div>
        {/* content section end */}
      </div>
      {/* cart content section end */}
    </div>
  );
};

export default CourseCart;