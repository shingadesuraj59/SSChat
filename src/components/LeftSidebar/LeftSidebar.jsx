import React from 'react'
import assets from '../../assets/assets'

const LeftSidebar = () => {
  return (
    <div className='ls bg-[#001030] text-white h-[75vh]'>
      <div className="ls-top p-5">
        <div className="ls-nav flex justify-between items-center">
            <img className='logo max-w-[140px]' src={assets.logo} alt="logo" />
            <div className="menu ">
                <img className='max-h-[20px] opacity-0.6 cursor-pointer' src={assets.menu_icon} alt="" />
            </div>
        </div>
         <div className="ls-search flex bg-[#002670] items-center gap-3 px-3 py-2 mt-5">
            <img className='w-[16px] ' src={assets.search_icon} alt="" />
            <input className='bg-transparent border-none outline-0 text-white text-[12px]' type="text" placeholder='Search here..' />
         </div>
      </div>
      <div className="ls-list flex flex-col h-[70%] overflow-y-scroll">
        {Array(12).fill("").map((item,index)=>(
            <div key={index} className="friends flex items-center gap-3 px-5 py-3 cursor-pointer text-[13px] hover:bg-[#077EFF] group">
            <img className='w-[35px] aspect-[1/1] rounded-[50%]' src={assets.profile1} alt="" />
             <div className='flex flex-col'>
                <p>Suraj Shingade</p>
                <span className='text-[#9f9f9f] text-[11px] group-hover:text-white'>Hello, How are you</span>
             </div>
        </div>
        ))
        }
      </div>
    </div>
  )
}

export default LeftSidebar
