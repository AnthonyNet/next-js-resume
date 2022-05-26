import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>

      <div className='w-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <img className='rounded-xl min-h-[350px]' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.businessinsider.com%2Fimage%2F5cee91c511e2050c9b3d4c68.jpg&f=1&nofb=1" alt="/" />
        </div>

        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>voluptate temporibus unde facere harum velit </p>
          <p className='py-2 text-gray-600'>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate voluptate temporibus unde facere harum velit voluptas id, ad error aut, perspiciatis rerum quidem. Minus totam facere similique iusto laboriosam odit.
          </p>
          <p className='py-2 text-gray-600'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati error optio voluptatum maxime laudantium iste, incidunt ea, doloremque sunt totam ducimus! Rem officia modi minima delectus ipsum laudantium reiciendis vero?
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some other projects.</p>
        </div>
     
      </div>
    </div>
  );
};

export default About;
