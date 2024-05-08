import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';


const Badge = () => {
  return (
    <div className='bg-[#1A3A3C] rounded-2xl'>
      {/* content section start */}
      <div className='flex items-center gap-5 py-3 px-5 w-full'>
        {/* icon section start */}
        <div className=''>
          <VerifiedOutlinedIcon className='bg-green-800 text-slate-300 xl:text-8xl p-2 rounded-2xl'></VerifiedOutlinedIcon>
        </div>
        {/* icon section end */}
        {/* percent section start */}
        <div className='w-full'>
          <ul className='w-full'>
            <li>
              <span className='xl:text-xs font-bold text-white'>10</span><br/>
              <span className='xl:text-xs text-gray-400'>Skill badge reward</span>
            </li>
            <li className='w-2/3'><hr className='w-full my-1'></hr></li>
            <li>
              <span className='xl:text-xs font-bold text-white'>480</span><br/>
              <span className='xl:text-xs text-gray-400'>Start Skill Performance</span>
            </li>
          </ul>
        </div>
        {/* percent section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default Badge;