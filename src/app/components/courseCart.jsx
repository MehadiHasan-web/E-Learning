import Image from 'next/image';
import learningImg from '../../../public/courseCartImg/learning.png'
import { Avatar } from '@mui/material';
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';

const CourseCart = () => {
  return (
    <div className='relative'>
      {/* cart content section start */}
      <div className='bg-white shadow-2xl rounded-2xl z-10'>
          {/* image section start */}
          <div className='h-full md:h-50% w-full relative'>
            <Image src={learningImg} alt="learning image" className='rounded-t-3xl'></Image>
            <span className='absolute top-[10%] left-[5%] text-white bg-green-600 px-2 py-1 sm:px-2 sm:py-1 md:px-2 md:py-2 lg:py-2 lg:px-2 xl:px-3 xl:py-2 2xl:px-3 2xl:py-2 rounded-full text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base font-bold'>Technology</span>
            <span className='z-10 absolute right-[5%] -bottom-[10%] bg-orange-600 text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg rounded-full h-7 w-7 sm:w-8 sm:h-8 md:h-10 md:w-10 lg:h-9 lg:w-9 xl:h-11 xl:w-11 2xl:h-12 2xl:w-12 flex justify-center items-center shadow-2xl'>$55</span>
          </div>
          {/* image section end */}
          {/* content section start */}
          <div className='p-4 xl:p-6 space-y-5'>
            {/* person img & name */}
            <ul className='flex items-center gap-4'>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <span className='text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl text-green-600'>Linda Bacote</span>
            </ul>
            {/* person img & name */}
            {/* title section start */}
            <h4 className='text-base sm:text-lg md:text-xl lg:text-base xl:text-xl 2xl:text-2xl font-semibold'>Expand your career opportunities with Python</h4>
            {/* title section end */}
            {/* list section start */}
            <ul className='flex items-center justify-between'>
              <li className='flex items-center gap-1'>
                {/* icon section start */}
                <BookmarksOutlinedIcon className='text-base sm:text-lg md:text-xl lg:text-base xl:text-2xl 2xl:text-3xl text-orange-600'></BookmarksOutlinedIcon>
                {/* icon section end */}
                {/* name section start */}
                <span className='text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-xl text-gray-400'>10 Lessons</span>
                {/* name section edn */}
              </li>
              <li className='flex items-center gap-1'>
                {/* icon section start */}
                <AccessAlarmsOutlinedIcon className='text-base sm:text-lg md:text-xl lg:text-base xl:text-2xl 2xl:text-3xl text-orange-600'></AccessAlarmsOutlinedIcon>
                {/* icon section end */}
                {/* name section start */}
                <span className='text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-xl text-gray-400'>5h 20m</span>
                {/* name section edn */}
              </li>
              <li className='flex items-center gap-1'>
                {/* icon section start */}
                <StarHalfOutlinedIcon className='text-base sm:text-lg md:text-xl lg:text-base xl:text-2xl 2xl:text-3xl text-orange-600'></StarHalfOutlinedIcon>
                {/* icon section end */}
                {/* name section start */}
                <span className='text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-xl text-gray-400'>4.5</span>
                {/* name section edn */}
              </li>
            </ul>
            {/* list section end */}
          </div>
          {/* content section end */}
          <div>
        </div>
        {/* content section end */}
      </div>
      {/* cart content section end */}
      <div className='absolute -bottom-3 w-[95%] h-full bg-black -z-10 rounded-xl '></div>
    </div>
  );
};

export default CourseCart;