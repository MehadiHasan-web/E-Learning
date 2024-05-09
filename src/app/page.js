
import CourseCart from "./components/courseCart";
import Resource from "./components/resource";



export default function Home() {
  return (
    <main>
      {/* find our course section start */}
      <div className="container mx-auto px-3 py-5 md:px-10 xl:py-10 xl:px-20">
        {/* title section start */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold">Find Your <span className="text-orange-600">Course</span></h1>
        </div>
        {/* title section end */}
        {/* courseCart section start */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5 sm:gap-4 md:gap-8 lg:gap-5 xl:gap-6 2xl:gap-10 my-10">
          <CourseCart></CourseCart>
          <CourseCart></CourseCart>
          <CourseCart></CourseCart>
          <CourseCart></CourseCart>
          <CourseCart></CourseCart>
          <CourseCart></CourseCart>
        </div>
        {/* courseCart section end */}
      </div>
      {/* find our course section end */}
      {/* resourceform section start */}
      <div className="my-10">
        <Resource></Resource>
      </div>
      {/* resourceform section end */}
    </main>
  );
}
