import { Button } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';


const DashboardNavbar = () => {
  return (
    <div className=' h-20 flex items-center w-full'>
      {/* content section start */}
      <div className='flex justify-between items-center w-full'>
        {/* name section start */}
        <div className='w-[55%]'>
          <h3 className='xl:text-3xl font bold text-slate-300'>Hello,Johson!!!</h3>
        </div>
        {/* name section end */}
        <div className='w-[45%]'>
          <ul className='flex justify-center items-center w-full gap-3'>
            <li className='relative'><input type="text" className=' w-full bg-[#0D3431] py-3 rounded-lg pl-3 text-gray-400' placeholder='Search here'></input><SearchIcon className='bg-white absolute p-2 right-0 bottom-0 top-0 h-full rounded-lg w-[18%]'></SearchIcon></li>
            <li className='border-2 border-white p-2 rounded-xl'><NotificationAddOutlinedIcon className='text-white'></NotificationAddOutlinedIcon></li>
            <li className='bg-pink-700 p-3 rounded-xl'><BakeryDiningIcon className='text-white'></BakeryDiningIcon></li>
            <li className='bg-yellow-300 p-3 rounded-xl flex items-center gap-1'><BakeryDiningIcon className='text-black'></BakeryDiningIcon><span className='xl:text-xs font-bold'>Insight AI</span></li>
          </ul>
        </div>
        {/* name section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default DashboardNavbar;