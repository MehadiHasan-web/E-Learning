import { Card } from "@mui/material";
import videoImg from '../../../../public/videoImg/video.png'
import Image from "next/image";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StarBorderPurple500RoundedIcon from '@mui/icons-material/StarBorderPurple500Rounded';

const RecommendedCourses = () => {
  return (
    <div className="w-1/3">
      {/* content section start */}
      <Card className="w-full bg-[#1A3A3C] border-[1px] border-slate-400 rounded-xl p-3">
        <div className="relative">
        <Image
          src={videoImg}
          alt="this is video image"
          className="rounded-xl xl:h-40"
        ></Image>
        <span className="flex items-center bg-white absolute top-[10%] px-2">
          <StarBorderPurple500RoundedIcon className="xl:text-lg"></StarBorderPurple500RoundedIcon><span className="xl:text-sm">4.8</span></span>
        <PlayCircleIcon className="absolute top-[40%] left-[40%] text-white text-4xl"></PlayCircleIcon>
        </div>
        <p className="xl:text-xs text-gray-300 my-2">40 Lesson | 48 Hours</p>
        <p className="xl:text-xs text-white font-bold">Artificial Intelligence Logo Maker</p>
      </Card>
      {/* content section end */}
    </div>
  );
};

export default RecommendedCourses;
