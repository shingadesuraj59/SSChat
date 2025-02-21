import React from 'react'
import assets from '../../assets/assets'

const RightSidebar = () => {
  return (
    <div className='rs text-white bg-[#001030] relative h-[75vh] overflow-y-scroll'>
      <div className="rs-profile pt-[60px] text-center max-w-[70%] mx-auto ">
        <img className='w-[110px] aspect-[1/1] rounded-[50%] mx-auto' src={assets.profile1} alt="" />
        <h3 className='text-[18px] font-light flex items-center justify-center gap-[5px] my-[5px] mx-[0px]'>Suraj Shingade <img src={assets.green_dot} className='dot w-[14px]' alt="" /></h3>
        <p className='text-[12px] opacity-[90%] font-light'>Hey, I Love You Lorem ipsum dolor sit amet consectetur. </p>
      </div>
      <hr className='bg-[#ffffff50] my-[15px] mx-[0px] ' />

      <div className="rs-media px-5 py-0 text-[14px]">
        <p>Media</p>
        <div className='max-h-[180px] overflow-y-scroll grid grid-cols-[1fr_1fr_1fr] gap-[5px] mt-2'>
          <img className='w-[60px] rounded-[4px] cursor-pointer' src={assets.pic1} alt="" />
          <img className='w-[60px] rounded-[4px] cursor-pointer' src={assets.pic2} alt="" />
          <img className='w-[60px] rounded-[4px] cursor-pointer' src={assets.pic3} alt="" />
          <img className='w-[60px] rounded-[4px] cursor-pointer' src={assets.pic4} alt="" />
          <img className='w-[60px] rounded-[4px] cursor-pointer' src={assets.pic1} alt="" />
          <img className='w-[60px] rounded-[4px] cursor-pointer' src={assets.pic2} alt="" />
        </div>
      </div>

      <button className='absolute bottom-[20px] left-[50%] bg-[#077eff] text-white border-none text-[13px] font-light px-[65px] py-[10px] rounded-[20px] cursor-pointer translate-[-50%]'>Logout</button>
      
    </div>
  )
}

export default RightSidebar
