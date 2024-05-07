import Image from 'next/image';
import learningImg from '../../../public/courseCartImg/learning.png'

const CourseCart = () => {
  return (
    <div>
      {/* cart content section start */}
      <div>
        {/* image section start */}
        <div className='h-50% w-full overflow-hidden'>
          <Image src={learningImg} alt="learning image"></Image>
        </div>
        {/* image section end */}
      </div>
      {/* cart content section end */}
    </div>
  );
};

export default CourseCart;