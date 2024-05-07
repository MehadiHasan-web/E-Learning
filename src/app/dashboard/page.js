import React from 'react';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import { Avatar, AvatarGroup, Card, CardContent, CardMedia, Slider, Typography } from '@mui/material';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import videoImg from '../../../public/videoImg/video.png'
import Image from 'next/image';

const DashHome = () => {
  return (
    <div className='flex'>
      {/* left section start */}
      <div className='w-[70%]'>
        {/* top section start */}
        <div className='flex justify-between items-center gap-5'>
          <div className='w-full p-5 bg-green-800 rounded-2xl space-y-2'>
            <ul className='flex justify-between items-center'>
              <li><ArrowCircleUpOutlinedIcon className='xl:text-3xl'></ArrowCircleUpOutlinedIcon></li>
              <li><ArrowCircleUpOutlinedIcon className='xl:text-3xl bg-yellow-500 p-1 rounded-full'></ArrowCircleUpOutlinedIcon></li>
            </ul>
            <h2 className='xl:text-lg'>How Design Make More Beatiful</h2>
            <p className='flex gap-5 items-center'><Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /><span className='text-white'>40%</span></p>
            <div className='flex justify-between items-center'>
              <AvatarGroup total={24}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
              </AvatarGroup>
              <ul className='flex items-center gap-2 text-white border-[1px] border-white rounded-lg px-2 py-1'>
                <li><AutoStoriesOutlinedIcon></AutoStoriesOutlinedIcon></li>
                <li className='xl:text-sm'>30 Lesson</li>
              </ul>
            </div>
          </div>
          <div className='w-full p-5 bg-green-800 rounded-2xl space-y-2'>
            <ul className='flex justify-between items-center'>
              <li><ArrowCircleUpOutlinedIcon className='xl:text-3xl'></ArrowCircleUpOutlinedIcon></li>
              <li><ArrowCircleUpOutlinedIcon className='xl:text-3xl bg-yellow-500 p-1 rounded-full'></ArrowCircleUpOutlinedIcon></li>
            </ul>
            <h2 className='xl:text-lg'>How Design Make More Beatiful</h2>
            <p className='flex gap-5 items-center'><Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /><span className='text-white'>40%</span></p>
            <div className='flex justify-between items-center'>
              <AvatarGroup total={24}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
              </AvatarGroup>
              <ul className='flex items-center gap-2 text-white border-[1px] border-white rounded-lg px-2 py-1'>
                <li><AutoStoriesOutlinedIcon></AutoStoriesOutlinedIcon></li>
                <li className='xl:text-sm'>30 Lesson</li>
              </ul>
            </div>
          </div>
        </div>
        {/* top section end */}
        {/* bottom section start */}
        <div className='bg-green-800 p-4 mt-5 rounded-2xl space-y-3'>
          <ul className='flex justify-between items-center'>
            <li className='xl:text-xl text-white'>Recommended Courses</li>
            <li className='xl:text-base text-yellow-500'>view All</li>
          </ul>
          <div className='flex items-center gap-5'>
            <Card className='w-1/3 bg-green-700 border-[1px] border-white rounded-xl p-3'>
              <Image src={videoImg} alt="this is video image" className='rounded-xl h-[100%]'></Image>
              <p className="text-sm text-gray-300 my-2">40 Lesson | 48 Hours</p>
              <p className="text-sm text-white">Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card className='w-1/3 bg-green-700 border-[1px] border-white rounded-xl p-3'>
              <Image src={videoImg} alt="this is video image" className='rounded-xl h-[100%]'></Image>
              <p className="text-sm text-gray-300 my-2">40 Lesson | 48 Hours</p>
              <p className="text-sm text-white">Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card className='w-1/3 bg-green-700 border-[1px] border-white rounded-xl p-3'>
              <Image src={videoImg} alt="this is video image" className='rounded-xl h-[100%]'></Image>
              <p className="text-sm text-gray-300 my-2">40 Lesson | 48 Hours</p>
              <p className="text-sm text-white">Lorem ipsum dolor sit amet.</p>
            </Card>
          </div>
        </div>
        {/* bottom section end */}
      </div>
      {/* left section end */}
      {/* right section start */}
      <div className='w-[30%]'></div>
      {/* right section end */}
    </div>
  );
};

export default DashHome;