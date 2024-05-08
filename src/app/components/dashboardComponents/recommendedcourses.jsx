import { Card } from "@mui/material";
import videoImg from '../../../../public/videoImg/video.png'
import Image from "next/image";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StarBorderPurple500RoundedIcon from '@mui/icons-material/StarBorderPurple500Rounded';

const RecommendedCourses = () => {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
      {/* content section start */}
      <Card className="w-full bg-[#1A3A3C] border-[1px] border-slate-400 rounded-xl p-3">
        <div className="relative">
        <Image
          src={videoImg}
          alt="this is video image"
          className="rounded-xl h-full w-full xl:h-40"
        ></Image>
        <span className="flex items-center bg-white absolute top-[10%] px-2">
          <StarBorderPurple500RoundedIcon className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-lg 2xl:text-xl"></StarBorderPurple500RoundedIcon><span className="text-sm sm:text-base md:text-base lg:text-sm xl:text-sm 2xl:text-base">4.8</span></span>
        <PlayCircleIcon className="absolute top-[40%] left-[40%] text-white text-4xl"></PlayCircleIcon>
        </div>
        <p className="text-xs sm:text-sm md:text-lg lg:text-base xl:text-xs 2xl:text-base text-gray-300 my-2">40 Lesson | 48 Hours</p>
        <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-xs 2xl:text-base text-white font-bold">Artificial Intelligence Logo Maker</p>
      </Card>
      {/* content section end */}
    </div>
  );
};

export default RecommendedCourses;
