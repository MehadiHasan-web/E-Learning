import Image from "next/image";
import Button from '@mui/material/Button';
import CourseCart from "./components/courseCart";

export default function Home() {
  return (
    <main>
      {/* find our course section start */}
      <div className="container mx-auto xl:py-10 xl:px-20">
        {/* title section start */}
        <div className="text-center">
          <h1 className="2xl:text-5xl font-bold">Find Your <span className="text-orange-600">Course</span></h1>
        </div>
        {/* title section end */}
        {/* courseCart section start */}
        <div className="grid grid-cols-3 gap-10">
        <CourseCart></CourseCart>
        <CourseCart></CourseCart>
        <CourseCart></CourseCart>
        <CourseCart></CourseCart>
        </div>
        
        {/* courseCart section end */}
      </div>
      {/* find our course section end */}
    </main>
  );
}
