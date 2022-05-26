import React from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {BsTwitter} from 'react-icons/bs'

 const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <p className="uppercase text-sm tracking-widest text-gray-600">Tailwind test page</p>
                <h1 className="py-4 text-gray-700">AZ</h1>
                <h1 className="py-4 text-gray-700">Don´t loose a hope</h1>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, tempore voluptate maiores dolores officiis commodi. In illum ratione nesciunt qui. Quia obcaecati harum commodi quisquam veritatis eveniet nihil doloribus dolorum.</p>
                <div className="flex items-center justify-between max-w-[430px] m-auto py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 curosor.pointer hover:scale-125 ease-in duration-300">
                        <FaLinkedinIn />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 curosor.pointer hover:scale-125  ease-in duration-300">
                        <FaGithub />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 curosor.pointer hover:scale-125  ease-in duration-300">
                        <AiOutlineMail />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 curosor.pointer hover:scale-125  ease-in duration-300">
                        <BsTwitter/>
                    </div>
                </div>
            </div>
        </div> 

    </div>
  );
};

 export default Main;
