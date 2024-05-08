
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Calender = () => {
  return (
    <div className='bg-[#1A3A3C] rounded-2xl'>
      <div className=''>
        {/* day section start */}
        <ul className='flex justify-between items-center h-16 px-2'>
          <li className='hover:bg-pink-500 py-2 px-1 rounded-2xl text-center'>
            <p className='text-xs'>S</p>
            <p className='text-xs'>07</p>
          </li>
          <li className='hover:bg-pink-500 py-2 px-1 rounded-2xl text-center'>
            <p className='text-xs'>M</p>
            <p className='text-xs'>07</p>
          </li>
          <li className='hover:bg-pink-500 py-2 px-1 rounded-2xl text-center'>
            <p className='text-xs'>T</p>
            <p className='text-xs'>07</p>
          </li>
          <li className='hover:bg-pink-500 py-2 px-1 rounded-2xl text-center'>
            <p className='text-xs'>W</p>
            <p className='text-xs'>07</p>
          </li>
          <li className='hover:bg-pink-500 py-2 px-1 rounded-2xl text-center'>
            <p className='text-xs'>T</p>
            <p className='text-xs'>07</p>
          </li>
          <li className='hover:bg-pink-500 py-2 px-1 rounded-2xl text-center'>
            <p className='text-xs'>F</p>
            <p className='text-xs'>07</p>
          </li>
          <li className='hover:bg-pink-500 py-2 px-1 rounded-2xl text-center'>
            <p className='text-xs'>S</p>
            <p className='text-xs'>07</p>
          </li>
        </ul>
        {/* day section end */}
        <hr className='text-gray-500'></hr>
        <div className='p-3'>
          <h3 className='xl:text-xs text-white font-bold'>Today's class</h3>
          <ul className='p-2'>
            <li className='flex gap-2 justify-between items-center'>
              <div className='border-l-[2px] border-yellow-500'>
                <p className='pl-2'>
                  <span className='xl:text-sm text-gray-400'>9:00 AM - 10:00 AM</span><br></br>
                  <span className='xl:text-xs font-bold text-gray-300'>UI Ux Basic Learning in Figma</span>
                </p>
              </div>
              <div>
                <p className='bg-green-800 opacity-45 w-6 h-6 flex justify-center items-center rounded-full'><PlayArrowOutlinedIcon className='text-white  text-sm'></PlayArrowOutlinedIcon></p>
              </div>
            </li>
            <li><hr className='text-gray-500 my-3'></hr></li>
            <li className='flex gap-2 justify-between items-center'>
              <div className='border-l-[2px] border-yellow-500'>
                <p className='pl-2'>
                  <span className='xl:text-sm text-gray-400'>9:00 AM - 10:00 AM</span><br></br>
                  <span className='xl:text-xs font-bold text-gray-300'>UI Ux Basic Learning in Figma</span>
                </p>
              </div>
              <div>
                <p className='bg-green-800 opacity-45 w-6 h-6 flex justify-center items-center rounded-full'><NotificationsOutlinedIcon className='text-white  text-sm'></NotificationsOutlinedIcon></p>
              </div>
            </li>
            <li><hr className='text-gray-500 my-3'></hr></li>
            <li className='flex gap-2 justify-between items-center'>
              <div className='border-l-[2px] border-yellow-500'>
                <p className='pl-2'>
                  <span className='xl:text-sm text-gray-400'>9:00 AM - 10:00 AM</span><br></br>
                  <span className='xl:text-xs font-bold text-gray-300'>UI Ux Basic Learning in Figma</span>
                </p>
              </div>
              <div>
                <p className='bg-green-800 opacity-45 w-6 h-6 flex justify-center items-center rounded-full'><NotificationsOutlinedIcon className='text-white  text-sm'></NotificationsOutlinedIcon></p>
              </div>
            </li>
            <li><hr className='text-gray-500 my-3'></hr></li>
            <li className='flex gap-2 justify-between items-center'>
              <div className='border-l-[2px] border-yellow-500'>
                <p className='pl-2'>
                  <span className='xl:text-sm text-gray-400'>9:00 AM - 10:00 AM</span><br></br>
                  <span className='xl:text-xs font-bold text-gray-300'>UI Ux Basic Learning in Figma</span>
                </p>
              </div>
              <div>
                <p className='bg-green-800 opacity-45 w-6 h-6 flex justify-center items-center rounded-full'><NotificationsOutlinedIcon className='text-white  text-sm'></NotificationsOutlinedIcon></p>
              </div>
            </li>
        </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Calender;