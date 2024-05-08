import Link from 'next/link';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Sidebar = () => {
  return (
    <>
    <div className='w-full bg-[#0D3431] py-5'>
      <ul className='w-full text-center space-y-5'>
        <li><Link href="/"><WidgetsOutlinedIcon className='xl:text-5xl border-[1px] border-gray-300 text-gray-300 p-3 rounded-md'></WidgetsOutlinedIcon></Link></li>
        <li><Link href="/"><DevicesOutlinedIcon className='xl:text-5xl border-[1px] border-gray-300 text-gray-300 p-3 rounded-md'></DevicesOutlinedIcon></Link></li>
        <li><Link href="/"><MenuBookOutlinedIcon className='xl:text-5xl border-[1px] border-gray-300 text-gray-300 p-3 rounded-md'></MenuBookOutlinedIcon></Link></li>
        <li><Link href="/"><EventNoteOutlinedIcon className='xl:text-5xl border-[1px] border-gray-300 text-gray-300 p-3 rounded-md'></EventNoteOutlinedIcon></Link></li>
        <li><Link href="/"><ContentPasteSearchOutlinedIcon className='xl:text-5xl border-[1px] border-gray-300 text-gray-300 p-3 rounded-md'></ContentPasteSearchOutlinedIcon></Link></li>
        <li><Link href="/"><TextsmsOutlinedIcon className='xl:text-5xl border-[1px] border-gray-300 text-gray-300 p-3 rounded-md'></TextsmsOutlinedIcon></Link></li>
        <li><Link href="/"><SettingsOutlinedIcon className='xl:text-5xl border-[1px] border-gray-300 text-gray-300 p-3 rounded-md'></SettingsOutlinedIcon></Link></li>
      </ul>
    </div>
    </>
    
  );
};

export default Sidebar;