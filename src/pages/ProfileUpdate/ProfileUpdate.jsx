import React, { useState } from 'react'
import assets from '../../assets/assets'

const ProfileUpdate = () => {

    const [image,setImage] = useState(false);

  return (
    <div className='profile min-h-[100vh] bg-[url(/background.png)] no-repeat flex items-center justify-center'>
      <div className="profile-container bg-white flex items-center justify-between min-w-[700px] rounded-[10px]">
        <form className='flex flex-col gap-5 p-10 '>
          <h3 className='font-medium text-[20px]'>Profile Details</h3>
          <label className='flex items-center gap-3 text-gray-500 cursor-pointer' htmlFor="avatar">
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='avatar'  hidden />
            <img className='w-[50px] aspect-[1/1] rounded-[50%]' src={image? URL.createObjectURL(image):assets.avatar_icon} alt="" />
            upload profile image
          </label>
          <input className='p-2 min-w-[300px] border-[1px] border-[#c9c9c9] rounded-lg' type="text" placeholder='Your name' required />
          <textarea className='p-2 min-w-[300px] border-[1px] border-[#c9c9c9] rounded-lg' placeholder='Write profile bio'></textarea>
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 cursor-pointer" type='submit'>Save</button>
        </form>
        <img className='max-w-[160px] aspect-[1/1] m-auto rounded-[50%]' src={image? URL.createObjectURL(image):assets.logo_icon} alt="" />
      </div>
    </div>
  )
}

export default ProfileUpdate
