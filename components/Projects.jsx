import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import languages from '../public/assets/projects/languages.png';
import workman from '../public/assets/projects/react-remeslnik.png';
import resume from '../public/assets/projects/react-cv.png';
import resumeOld from '../public/assets/projects/old-cv.png';
import workmanOld from '../public/assets/projects/remeslnik.png';
import bootstrap from '../public/assets/projects/bootstrap-web.png';
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-20'>
            <p className='text-xl uppercase text-sky-500'>projects</p>
            <h2>Look at it</h2>
            <div className='p-6 shadow-xl ease-in duration-300'>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4 justify-center items-center'>
              <ProjectItem  
              title='Learn languages'
              backgroundImg={languages}
              techs="NodeJS, Express, JavaScript, Sass, Bootstrap5" 
              projectUrl='https://learn-english-and-deutsch.vercel.app/'/>
              <ProjectItem  
              title='React workman'
              backgroundImg={workman} 
              techs="React, Sass"
              projectUrl='https://react-remeslnik.vercel.app/'/>
              <ProjectItem  
              title='React-resumé'
              backgroundImg={resume} 
              techs="React, Sass"
              projectUrl='https://resume-one-rosy.vercel.app'/>
              <ProjectItem  
              title='Older resumé'
              backgroundImg={resumeOld} 
              techs="JavaScript, HTML, Css"
              projectUrl='https://anthonyzet.github.io/MyCV'/>
              <ProjectItem  
              title='Older workman web'
              backgroundImg={workmanOld} 
              techs="JavaScript, Sass"
              projectUrl='https://remeslnik.vercel.app/'/>
              <ProjectItem  
              title='Simple Boostrap page'
              backgroundImg={bootstrap} 
              techs="Bootstrap"
              projectUrl='https://anthonyzet.github.io/Bootstrap-simple-page'/>
            </div>
        </div>  
    </div>
   </div>
  )
}

export default Projects