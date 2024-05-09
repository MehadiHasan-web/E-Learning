import Image from "next/image";
import logo from "../../../public/logo.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import knowledge from '../../../public/footer/knowledge.png'

const Footer = () => {
  return (
    <div className="px-3 py-2 bg-[#fff6f4] relative">
      {/* content section start */}
      <div className="container mx-auto  md:px-10 xl:py-10 xl:px-20 ">
        {/* item section start */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-3 sm:gap-5 md:gap-5 lg:gap-3 py-5">
          {/* item1 start */}
          <div className="">
            <Image
              src={logo}
              alt="this is footer logo"
              className="text-center mx-auto"
            ></Image>
            <ul className="flex items-center justify-center gap-2 xl:gap-3 mt-3 xl:mt-5">
              <li className="border-[1px] border-black rounded-full  hover:bg-orange-600 hover:text-white hover:border-orange-600 flex justify-center items-center p-1">
                <TwitterIcon className="text-lg sm:text-xl md:text-xl lg:text-sm xl:text-lg 2xl:text-xl"></TwitterIcon>
              </li>
              <li className="border-[1px] border-black rounded-full  hover:bg-orange-600 hover:text-white hover:border-orange-600 flex justify-center items-center p-1">
                <GoogleIcon className="text-lg sm:text-xl md:text-xl lg:text-sm xl:text-lg 2xl:text-xl"></GoogleIcon>
              </li>
              <li className="border-[1px] border-black rounded-full  hover:bg-orange-600 hover:text-white hover:border-orange-600 flex justify-center items-center p-1">
                <InstagramIcon className="text-lg sm:text-xl md:text-xl lg:text-sm xl:text-lg 2xl:text-xl"></InstagramIcon>
              </li>
            </ul>
          </div>
          {/* item1 end */}
          {/* item2 start */}
          <div className="">
            <ul className="space-y-2">
              <li className="text-sm sm:text-base md:text-base lg:text-sm xl:text-base 2xl:text-lg font-bold">Learen Business</li>
              <li className="text-sm sm:text-base md:text-base lg:text-sm xl:text-base 2xl:text-lg font-bold">Teach on Learen</li>
              <li className="text-sm sm:text-base md:text-base lg:text-sm xl:text-base 2xl:text-lg font-bold">Get the app</li>
            </ul>
          </div>
          {/* item2 end */}
          {/* item3 start */}
          <div className="">
            <ul className="space-y-2">
              <li className="text-sm sm:text-base md:text-base lg:text-sm xl:text-base 2xl:text-lg font-bold">Help and Support</li>
              <li className="text-sm sm:text-base md:text-base lg:text-sm xl:text-base 2xl:text-lg font-bold">Careers</li>
              <li className="text-sm sm:text-base md:text-base lg:text-sm xl:text-base 2xl:text-lg font-bold">Investor Relation</li>
            </ul>
          </div>
          {/* item3 end */}
          {/* item4 start */}
          <div className="">
            <ul className="space-y-2">
              <li className="text-sm sm:text-base md:text-base lg:text-sm xl:text-base 2xl:text-lg font-bold">Terms of Service</li>
              <li className="text-sm sm:text-base md:text-base lg:text-sm xl:text-base 2xl:text-lg font-bold">Privacy Policy</li>
              <li className="text-sm sm:text-base md:text-base lg:text-sm xl:text-base 2xl:text-lg font-bold">Disclosures</li>
            </ul>
          </div>
          {/* item4 end */}
          {/* item4 start */}
          <div className="">
            <ul className="space-y-3">
              <li className="text-sm sm:text-base md:text-base lg:text-sm xl:text-sm 2xl:text-base font-bold">Subscribe to Our Newsletter</li>
              <li className="relative rounded-full overflow-hidden">
                <input className="w-full px-4 py-3 text-xs focus-visible:outline-none" placeholder="Email Address"></input>
                <button className="uppercase absolute right-0 top-0 bottom-0 bg-black text-white text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs px-2 font-bold ">send</button>
              </li>
            </ul>
          </div>
          {/* item4 end */}
        </div>
        {/* item section end */}
        {/* hr section start */}
        <hr className="w-full"></hr>
        {/* hr section end */}
        {/* copyright section start */}
        <p className="text-xs sm:text-sm md:text-base xl:text-base 2xl:text-lg text-center mt-10">
          Copyright © 2024 <span className="text-blue-500">Learen</span> All
          rights reserved
        </p>
        {/* copyright section end */}
      </div>
      {/* content section end */}
      <Image className="hidden md:block absolute -top-6 -bottom-5 left-0 h-[100%] w-[25%]" alt="image" src={knowledge}></Image>
    </div>
  );
};

export default Footer;
