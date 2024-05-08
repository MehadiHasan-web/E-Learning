import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import { Avatar, AvatarGroup, Slider } from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

const Course = () => {
  return (
    <div className="w-full">
      {/* content section start */}
      <div className="w-full p-3 sm:p-4 md:p-4 lg:p-3 xl:p-5 rounded-2xl space-y-2 linearColor">
        <ul className="flex justify-between items-center">
          <li className="flex justify-center items-center bg-green-500 p-1 rounded-xl">
            <BakeryDiningIcon className="text-white text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-3xl 2xl:text-4xl"></BakeryDiningIcon>
          </li>
          <li className="flex justify-center items-center bg-yellow-400 p-1 rounded-full">
            <ArrowOutwardRoundedIcon className="text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-3xl 2xl:text-4xl"></ArrowOutwardRoundedIcon>
          </li>
        </ul>
        <h2 className="text-sm sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl text-white w-2/3 sm:w-full md:w-3/4 lg:w-2/3 xl:3/4 2xl:3/4">
          How Design Make More Beatiful
        </h2>
        <p className="flex gap-5 items-center">
          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
          <span className="text-white">40%</span>
        </p>
        <div className="flex justify-between items-center">
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
          <ul className="flex items-center gap-2 text-white rounded-lg px-2 py-1 bg-[#4c5f5e]">
            <li>
              <AutoStoriesOutlinedIcon className="text-xs sm:text-sm md:text-lg lg:text-sm xl:text-sm 2xl:text-xl"></AutoStoriesOutlinedIcon>
            </li>
            <li className="text-xs sm:text-xs md:text-sm lg:text-xs xl:text-xs 2xl:text-base">30 Lesson</li>
          </ul>
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default Course;
