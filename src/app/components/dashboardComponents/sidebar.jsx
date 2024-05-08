import Link from 'next/link';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Image from 'next/image';
import logoImg from '../../../../public/logo.svg'
import { Avatar } from '@mui/material';

const Sidebar = () => {
  return (
    <>
    <div className='w-full h-full flex flex-col justify-between items-center'>
      {/* logo section start */}
      <div ><Link href="/"><Image alt="home image" src={logoImg} className="text-center mx-auto"></Image></Link></div>
      {/* logo section end */}
      {/* link section start */}
      <ul className='w-full text-center space-y-5'>
        <li><Link href="/"><WidgetsOutlinedIcon className='lg:text-2xl xl:text-5xl hover:bg-yellow-400 hover:text-black text-gray-300 border-[1px] border-gray-300 hover:border-yellow-400 duration-700 lg:p-1 xl:p-3 rounded-md'></WidgetsOutlinedIcon></Link></li>
        <li><Link href="/"><DevicesOutlinedIcon className='lg:text-2xl xl:text-5xl hover:bg-yellow-400 hover:text-black text-gray-300 border-[1px] border-gray-300 hover:border-yellow-400 duration-700 lg:p-1 xl:p-3 rounded-md'></DevicesOutlinedIcon></Link></li>
        <li><Link href="/"><MenuBookOutlinedIcon className='lg:text-3x xl:text-5xl hover:bg-yellow-400 hover:text-black text-gray-300 border-[1px] border-gray-300 hover:border-yellow-400 duration-700 lg:p-1 xl:p-3 rounded-md'></MenuBookOutlinedIcon></Link></li>
        <li><Link href="/"><EventNoteOutlinedIcon className='lg:text-2xl xl:text-5xl hover:bg-yellow-400 hover:text-black text-gray-300 border-[1px] border-gray-300 hover:border-yellow-400 duration-700 lg:p-1 xl:p-3 rounded-md'></EventNoteOutlinedIcon></Link></li>
        <li><Link href="/"><ContentPasteSearchOutlinedIcon className='lg:text-2xl xl:text-5xl hover:bg-yellow-400 hover:text-black text-gray-300 border-[1px] border-gray-300 hover:border-yellow-400 duration-700 lg:p-1 xl:p-3 rounded-md'></ContentPasteSearchOutlinedIcon></Link></li>
        <li><Link href="/"><TextsmsOutlinedIcon className='lg:text-2xl xl:text-5xl hover:bg-yellow-400 hover:text-black text-gray-300 border-[1px] border-gray-300 hover:border-yellow-400 duration-700 lg:p-1 xl:p-3 rounded-md'></TextsmsOutlinedIcon></Link></li>
        <li><Link href="/"><SettingsOutlinedIcon className='lg:text-2xl xl:text-5xl hover:bg-yellow-400 hover:text-black text-gray-300 border-[1px] border-gray-300 hover:border-yellow-400 duration-700 lg:p-1 xl:p-3 rounded-md'></SettingsOutlinedIcon></Link></li>
      </ul>
      {/* link section end */}
      {/* user image section start */}
      <div ><Link href="/"><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></Link></div>
      {/* user image section end */}
    </div>
    </>
    
  );
};

export default Sidebar;