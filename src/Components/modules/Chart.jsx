import React, { useState } from 'react'
import { convertData } from '../../Helpers/convertData';

function Chart({chart,setchart}) {
  const [type ,settype] =useState("prices")
  console.log(convertData(chart,type));
  return (
    <>
    <div className='fixed w-full h-full backdrop-blur-sm top-0 left-0'>
    <span className=' inline-block w-8 h-8 bg-blue-500 rounded-lg text-center font-medium ml-10 mt-10   cursor-pointer  text-white  ' onClick={()=>setchart(null)}>X</span>
    <div className='w-3/6 bg-slate-800 p-10 m-auto rounded-2xl mt-8 border-2 border-slate-500 border-solid'></div>
    </div>
    </>
  )
}

export default Chart