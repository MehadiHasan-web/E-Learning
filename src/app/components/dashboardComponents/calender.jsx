
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Calender = () => {
  return (
    <div className='p-3 sm:p-5 md:p-4 lg:p-5'>
      <div className='bg-[#1A3A3C] rounded-2xl'>
      <div className=''>
        {/* day section start */}
        <ul className='flex justify-around items-center h-16 sm:h-20 md:h-24 lg:h-20 xl:h-16 2xl:h-20 px-2'>
          <li className='hover:bg-pink-500 text-gray-400 hover:text-black border-[1px] border-gray-600 py-2 px-1 rounded-2xl text-center'>
            <p className=' text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm'>S</p>
            <p className=' text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm'>07</p>
          </li>
          <li className='hover:bg-pink-500 text-gray-400 hover:text-black border-[1px] border-gray-600 py-2 px-1 rounded-2xl text-center'>
            <p className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm'>M</p>
            <p className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm'>07</p>
          </li>
          <li className='hover:bg-pink-500 text-gray-400 hover:text-black border-[1px] border-gray-600 py-2 px-1 rounded-2xl text-center'>
            <p className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm'>T</p>
            <p className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm'>07</p>
          </li>
          <li className='hover:bg-pink-500 text-gray-400 hover:text-black border-[1px] border-gray-600 py-2 px-1 rounded-2xl text-center'>
            <p className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm'>W</p>
            <p className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm'>07</p>
          </li>
          <li className='hover:bg-pink-500 text-gray-400 hover:text-black border-[1px] border-gray-600 py-2 px-1 rounded-2xl text-center'>
            <p className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm'>T</p>
            <p className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm'>07</p>
          </li>
          <li className='hover:bg-pink-500 text-gray-400 hover:text-black border-[1px] border-gray-600 py-2 px-1 rounded-2xl text-center'>
            <p className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm'>F</p>
            <p className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm'>07</p>
          </li>
          <li className='hover:bg-pink-500 text-gray-400 hover:text-black border-[1px] border-gray-600 py-2 px-1 rounded-2xl text-center'>
            <p className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm'>S</p>
            <p className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm'>07</p>
          </li>
        </ul>
        {/* day section end */}
        <hr className='text-gray-500 my-1'></hr>
        <div className='p-3'>
          <h3 className='text-sm sm:text-lg md:text-xl lg:text-base xl:text-xs 2xl:text-base text-white font-bold'>Today's class</h3>
          <ul className='p-2'>
            <li className='flex gap-2 justify-between items-center'>
              <div className='border-l-[2px] border-yellow-500'>
                <p className='pl-2'>
                  <span className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base text-gray-400'>9:00 AM - 10:00 AM</span><br></br>
                  <span className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-base font-bold text-gray-300'>UI Ux Basic Learning in Figma</span>
                </p>
              </div>
              <div>
                <p className='bg-[#4c5f5e] w-6 h-6 flex justify-center items-center rounded-full'><PlayArrowOutlinedIcon className='text-white text-sm'></PlayArrowOutlinedIcon></p>
              </div>
            </li>
            <li><hr className='text-gray-500 my-3'></hr></li>
            <li className='flex gap-2 justify-between items-center'>
              <div className='border-l-[2px] border-yellow-500'>
                <p className='pl-2'>
                  <span className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base text-gray-400'>9:00 AM - 10:00 AM</span><br></br>
                  <span className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-base font-bold text-gray-300'>UI Ux Basic Learning in Figma</span>
                </p>
              </div>
              <div>
                <p className='bg-[#4c5f5e] w-6 h-6 flex justify-center items-center rounded-full'><NotificationsOutlinedIcon className='text-white  text-sm'></NotificationsOutlinedIcon></p>
              </div>
            </li>
            <li><hr className='text-gray-500 my-3'></hr></li>
            <li className='flex gap-2 justify-between items-center'>
              <div className='border-l-[2px] border-yellow-500'>
                <p className='pl-2'>
                  <span className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base text-gray-400'>9:00 AM - 10:00 AM</span><br></br>
                  <span className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-base font-bold text-gray-300'>UI Ux Basic Learning in Figma</span>
                </p>
              </div>
              <div>
                <p className='bg-[#4c5f5e]  w-6 h-6 flex justify-center items-center rounded-full'><NotificationsOutlinedIcon className='text-white  text-sm'></NotificationsOutlinedIcon></p>
              </div>
            </li>
            <li><hr className='text-gray-500 my-3'></hr></li>
            <li className='flex gap-2 justify-between items-center'>
              <div className='border-l-[2px] border-yellow-500'>
                <p className='pl-2'>
                  <span className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base text-gray-400'>9:00 AM - 10:00 AM</span><br></br>
                  <span className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-base font-bold text-gray-300'>UI Ux Basic Learning in Figma</span>
                </p>
              </div>
              <div>
                <p className='bg-[#4c5f5e]  w-6 h-6 flex justify-center items-center rounded-full'><NotificationsOutlinedIcon className='text-white  text-sm'></NotificationsOutlinedIcon></p>
              </div>
            </li>
        </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Calender;