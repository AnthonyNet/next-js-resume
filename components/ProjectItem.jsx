import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const ProjectItem = ({title, backgroundImg, projectUrl, techs }) => {
  return (
    <div className='m-auto group transition ease-in-out duration-1000  relative text-white hover:bg-sky-500 rounded-xl '>
                  <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg}></Image>
                  <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                  <h3 className='text-2xl tracking-wider text-center '>{title}</h3>
                    <p className='text-center md:py-10'>{techs}</p>
                    <Link href={projectUrl}>
                    <p className='text-center py-3 rounded-lg bg-white text-sky-500 font-bold text-lg cursor-pointer'>More Info</p>
                    </Link>
                  </div>
              </div>
  )
}

export default ProjectItem