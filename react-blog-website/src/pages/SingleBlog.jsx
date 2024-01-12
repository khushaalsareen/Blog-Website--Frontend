import React from 'react'
import { useLoaderData } from 'react-router-dom';
import {FaUser} from 'react-icons/fa'
import { FaClock } from 'react-icons/fa6';
import SideBar from '../components/SideBar';
const SingleBlog = () => {
    const data = useLoaderData();
    const {title,image,category,author,published_date,reading_time,content} = data[0];
  return (
    <div>
        <div className='py-40 bg-black text-center text-white px-4'>
      <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
      </div>

      {/* blog details */}
      <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
            <div>
                <img src={image} alt="myImage" className='w-full mx-auto rounded' />
            </div>
            <h2 className='text-3xl font-bold mb-4 text-blue-500 cursor-pointer mt-8'>{title}</h2>
            <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}
            </p>
            <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/>{reading_time}
            </p>
            <p className='text-base text-gray-500 mb-6'>{content}</p>
            <div className='text-base text-gray-500 mb-6'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum omnis, animi recusandae excepturi ab nobis obcaecati, officia eaque aut ducimus magni provident dignissimos ex et harum accusantium maiores quidem.</p><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni enim aliquid repudiandae sunt est nulla, velit animi vel impedit harum iure blanditiis! Quam tenetur delectus neque laborum ut dolores?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, id commodi tempore asperiores cum dolorum, iure eum dolorem veniam aut ullam omnis! Officiis perferendis nam quo fugit commodi ad quod.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum omnis, animi recusandae excepturi ab nobis obcaecati, officia eaque aut ducimus magni provident dignissimos ex et harum accusantium maiores quidem.</p><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni enim aliquid repudiandae sunt est nulla, velit animi vel impedit harum iure blanditiis! Quam tenetur delectus neque laborum ut dolores?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, id commodi tempore asperiores cum dolorum, iure eum dolorem veniam aut ullam omnis! Officiis perferendis nam quo fugit commodi ad quod.</p><br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, id commodi tempore asperiores cum dolorum, iure eum dolorem veniam aut ullam omnis! Officiis perferendis nam quo fugit commodi ad quod.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum omnis, animi recusandae excepturi ab nobis obcaecati, officia eaque aut ducimus magni provident dignissimos ex et harum accusantium maiores quidem.</p><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni enim aliquid repudiandae sunt est nulla, velit animi vel impedit harum iure blanditiis! Quam tenetur delectus neque laborum ut dolores?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, id commodi tempore asperiores cum dolorum, iure eum dolorem veniam aut ullam omnis! Officiis perferendis nam quo fugit commodi ad quod.</p><br />
            </div>
        </div>
        <div className='lg:w-1/2'>
           <SideBar /> 
        </div>
      </div>
    </div>
  )
}

export default SingleBlog