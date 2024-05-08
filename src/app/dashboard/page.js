import React from 'react';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import { Avatar, AvatarGroup, Card, CardContent, CardMedia, Slider, Typography } from '@mui/material';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

import Image from 'next/image';
import { Caladea } from 'next/font/google';
import Calender from '../components/dashboardComponents/calender';
import Badge from '../components/dashboardComponents/badge';
import Course from '../components/dashboardComponents/course';
import RecommendedCourses from '../components/dashboardComponents/recommendedcourses';

const DashHome = () => {
  return (
    <div className='lg:flex lg:justify-between lg:items-center gap-4'>
      {/* left section start */}
      <div className='w-full hidden lg:w-[70%]'>
        {/* top section start */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 sm:gap-5 md:gap-5 lg:gap-3 p-3 sm:p-5 md:p-4 lg:p-5 xl:gap-5 2xl:gap-5'>
          <Course></Course>
          <Course></Course>
        </div>
        {/* top section end */}
        {/* bottom section start */}
        <div className='bg-[#0D3431] mt-5 rounded-2xl space-y-3 p-3 sm:p-5 md:p-5 lg:p-4 xl:p-3 2xl:p-3'>
          <ul className='flex justify-between items-center'>
            <li className='text-sm sm:text-lg md:text-xl lg:text-lg xl:text-lg 2xl:text-xl text-white'>Recommended Courses</li>
            <li className='text-xs sm:text-base md:text-lg lg:text-base xl:text-sm 2xl:text-base text-yellow-500'>view All</li>
          </ul>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-5 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-5'>
            <RecommendedCourses></RecommendedCourses>
            <RecommendedCourses></RecommendedCourses>
            <RecommendedCourses></RecommendedCourses>
          </div>
        </div>
        {/* bottom section end */}
      </div>
      {/* left section end */}
      {/* right section start */}
      <div className='w-full lg:w-[30%] space-y-3'>
        {/* top section start */}
        <Calender></Calender>
        {/* top section end */}
        {/* bottom section start */}
        <Badge></Badge>
        {/* bottom section end */}
      </div>
      {/* right section end */}
    </div>
  );
};

export default DashHome;