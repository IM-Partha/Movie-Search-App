import React from 'react'
const Nabbar = () => {
  return (
    <div className='main w-full lg:flex md:flex  flex-wrap justify-between p-3 shadow-md   bg-[#8c7ae6]'>
        <div className='left flex justify-center items-center md:justify-center '>
            <img className='w-[50px]' src="https://movie-app-88kamal.vercel.app/clipart3105859.png" alt="" />
            <h2 className='text-white text-2xl font-bold'>Movie Masala</h2>
        </div>
        <div className='right-0'>
            <ul className='md:justify-center flex mt-3  mr-5 gap-5 text-white font-bold cursor-pointer'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Nabbar