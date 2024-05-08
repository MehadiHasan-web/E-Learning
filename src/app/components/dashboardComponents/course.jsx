import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import { Avatar, AvatarGroup, Slider } from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

const Course = () => {
  return (
    <div className="w-full">
      {/* content section start */}
      {/* <div className='w-full p-5 bg-gradient-to-tr from-indigo-600 via-[#0D3431] to-pink-800 rounded-2xl space-y-2'> */}
      <div className="w-full p-5 rounded-2xl space-y-2 linearColor">
        <ul className="flex justify-between items-center">
          <li className="bg-green-500 p-1 rounded-xl">
            <BakeryDiningIcon className="text-white xl:text-3xl"></BakeryDiningIcon>
          </li>
          <li className="bg-yellow-400 p-1 rounded-full">
            <ArrowOutwardRoundedIcon className="xl:text-2xl "></ArrowOutwardRoundedIcon>
          </li>
        </ul>
        <h2 className="xl:text-lg text-white w-2/3">
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

          <ul className="flex items-center gap-2 text-white  border-white rounded-lg px-2 py-1 bg-[#193D3B]">
            <li>
              <AutoStoriesOutlinedIcon></AutoStoriesOutlinedIcon>
            </li>
            <li className="xl:text-sm">30 Lesson</li>
          </ul>
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default Course;
