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
    <div className='flex justify-between items-center gap-4'>
      {/* left section start */}
      <div className='w-[70%]'>
        {/* top section start */}
        <div className='flex justify-between items-center gap-5'>
          <Course></Course>
          <Course></Course>
        </div>
        {/* top section end */}
        {/* bottom section start */}
        <div className='bg-[#0D3431] p-4 mt-5 rounded-2xl space-y-3'>
          <ul className='flex justify-between items-center'>
            <li className='xl:text-xl text-white'>Recommended Courses</li>
            <li className='xl:text-base text-yellow-500'>view All</li>
          </ul>
          <div className='flex items-center gap-5'>
            <RecommendedCourses></RecommendedCourses>
            <RecommendedCourses></RecommendedCourses>
            <RecommendedCourses></RecommendedCourses>
          </div>
        </div>
        {/* bottom section end */}
      </div>
      {/* left section end */}
      {/* right section start */}
      <div className='w-[30%] space-y-3'>
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