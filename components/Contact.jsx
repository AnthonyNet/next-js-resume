import React from 'react'

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-100 text-gray-800 antialiase  flex flex-col justify-center">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <span className="text-2xl font-light">Let me know</span>
    <div className="mt-4 bg-white shadow-md rounded-lg">
      <div className="h2 bg-indigo-400 rounded-t-m py-2"></div>
      <div className="px-8">
        <label  className="block font-semibold">Your email</label>
        <input type="text" placeholder="Email" className="border w-full h-5 py-6" />
        <textarea className='w-full py-6 border' placeholder="Your questions here"></textarea>
        <div className='flex justify-between items-baseline'>
          <button className="mt-4 bg-indigo-500 text-white p-3 hover:scale-105 ease-in duration-300" type="submit">Send question </button>
        </div>
      </div>
    </div>
    </div>

    </section>
  )
}

export default Contact