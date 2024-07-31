import React, { useState } from 'react'
import { convertData } from '../../Helpers/convertData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart({chart,setchart}) {
  const [type ,settype] =useState("prices")
  console.log(convertData(chart,type));
  return (
    <>
    <div className='fixed w-full h-full backdrop-blur-sm top-0 left-0'>
    <span className=' inline-block w-8 h-8 bg-blue-500 rounded-lg text-center font-medium ml-10 mt-10   cursor-pointer  text-white  ' onClick={()=>setchart(null)}>X</span>
    <div className='w-3/6 bg-slate-800 p-10 m-auto rounded-2xl mt-8 border-2 border-slate-500 border-solid'>
    <div className=' h-80'>      {/* div-->graph */}
    
    <ChartComponent data={convertData(chart,type)} type={type} />
    </div>
    </div>
    
    </div>
    </>
  )
}

export default Chart

const ChartComponent =({data,type})=>{
  return(
   
    <ResponsiveContainer width="100%" height="100%">
     <LineChart className='' width={400} height={400} data={data}>
       <CartesianGrid className='' stroke="#5218ee" />
       <Line type="monotone" dataKey={type} stroke="#5218ee" strokeWidth="2px" />
       <YAxis dataKey={type} domain={["auto","auto"]} />
       <XAxis dataKey="date" hide />
       <Legend />
       <Tooltip />
     </LineChart>
    </ResponsiveContainer>
   
  )
}