import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';


const Badge = () => {
  return (
    <div className='p-3 sm:p-5 md:p-4 lg:p-5'>
      <div className='bg-[#1A3A3C] rounded-2xl'>
      {/* content section start */}
      <div className='flex items-center gap-5 py-3 px-5 w-full'>
        {/* icon section start */}
        <div className=''>
          <VerifiedOutlinedIcon className='bg-green-800 text-slate-300 text-6xl sm:text-8xl md:text-8xl lg:text-6xl xl:text-8xl 2xl:text-8xl p-2 sm:p-1 md:p-1 lg:p-1 xl:p-2 rounded-2xl'></VerifiedOutlinedIcon>
        </div>
        {/* icon section end */}
        {/* percent section start */}
        <div className='w-full'>
          <ul className='w-full'>
            <li>
              <span className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm font-bold text-white'>10</span><br/>
              <span className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm text-gray-400'>Skill badge reward</span>
            </li>
            <li className='w-full'><hr className='w-full my-1'></hr></li>
            <li>
              <span className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm font-bold text-white'>480</span><br/>
              <span className='text-xs sm:text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-sm text-gray-400'>Start Skill Performance</span>
            </li>
          </ul>
        </div>
        {/* percent section end */}
      </div>
      {/* content section end */}
    </div>
    </div>
  );
};

export default Badge;