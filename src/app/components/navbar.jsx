import Image from 'next/image';
import logo from '../../../public/logo.svg'
import Link from 'next/link';
import { Button } from '@mui/material';

const Navbar = () => {
  return (
    <div className='bg-slate-100'>
      {/* navbar section start */}
      <div className='container mx-auto px-20 py-5'>
        <div className='flex justify-between items-center'>
          {/* logo section start */}
          <Image src={logo} alt="this is logo image"></Image>
          {/* logo section end */}
          {/* link section start */}
          <ul className='flex items-center gap-8'>
            <li className='2xl:text-lg'><Link href="/">Home</Link></li>
            <li className='2xl:text-lg'><Link href="/">About</Link></li>
            <li className='2xl:text-lg'><Link href="/dashboard">Dashboard</Link></li>
            <li className='2xl:text-lg'><Link href="/">Courses</Link></li>
            <li className='2xl:text-lg'><Link href="/">Contact</Link></li>
          </ul>
          {/* link section end */}
          {/* button section start */}
          <Button variant="contained" size="medium" className='rounded-full bg-orange-600 hover:bg-orange-600'>
          LogIn
        </Button>
        {/* button section start */}
        </div>
      </div>
      {/* navbar section end */}
      
    </div>
  );
};

export default Navbar;