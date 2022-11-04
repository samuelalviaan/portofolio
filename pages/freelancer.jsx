import Image from 'next/legacy/image';
import React from 'react';
import freelancerImg from "../public/assets/projects/serv.png";
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

export default function freelancer() {
  return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image className="absolute z-1" layout='fill' objectFit='cover' src={freelancerImg} alt="/" />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Freelancer Web</h2>
                    <h3>Laravel / Bootstrap / MySQL</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p className='py-4'>This application was built using the Bootstrap as css framework, Laravel as PHP framework and MySQL as database. Users are able to search a freelancer or become a freelancer on this website. Users can login and sign up with an email address to search for a freelancer or become a freelancer.</p>
                    <button className='px-8 py-2 mt-4 mr-8'>DEMO</button>
                    <button className='px-8 py-2 mt-4'>CODE</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Techonologies</p>
                        <div className='grid grid-cols-2 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2' /> PHP</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2' /> Laravel</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2' /> Bootstrap</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2' /> MySQL</p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>

        </div>
  )
}
