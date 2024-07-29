import React from 'react'
import {RotatingLines} from 'react-loader-spinner'
import chartUp from "../../assets/chart-up.svg"
import chartDown from "../../assets/chart-down.svg"
import { chartCoin } from '../../services/cryptoApi'
function Tables({coines ,loading ,setchart}) {
    // console.log(coines)
  return (
    <>
    <div className='flex justify-center items-center mt-16 mb-36 ml-10 mr-10' >
      {loading?<div className='flex items-center justify-center mt-56'><RotatingLines strokeColor="white" width="52" height="52" /></div>:( <div className=' overflow-x-auto rounded-lg shadow-2xl shadow-blue-400'><table className='text-white m-4'>
        <thead className=''>
          <tr className='border-b-2'>
            <th className='px-5 py-1'>Coin</th>
            <th className='px-5 py-1'>Name</th>
            <th className='px-5 py-1'>Price</th>
            <th className='px-5 py-1'>24h</th>
            <th className='px-5 py-1'>Total Volume</th>
            <th className='px-5 py-1'></th>
          </tr>
        </thead>
        <tbody className=''>
          {coines.map((coines)=>(
            <TableRow coines={coines} key={coines.id} setchart={setchart} />
          ))}
            
        </tbody>
      </table>
      </div>)}
    </div>
    </>
  )
}

export default Tables

const TableRow = ({coines:{id,image ,symbol ,name,current_price,total_volume ,price_change_percentage_24h:price_change},setchart})=>{

  const chartHandler =()=>{
    const chartshow =async()=>{
      try{
      const res = await fetch(chartCoin(id))
      const json = await res.json()
      setchart(json)
      console.log(json);
    }
  catch(err){
    setchart(null)
  }}
    chartshow()
  }
  return(<tr className='border-b-2 border-gray-700'>
    <td className='px-6 py-1'>
      <div className='flex items-center cursor-pointer py-3' onClick={chartHandler}>
    <img src={image} alt={symbol} className='h-9 mr-4' />
    <div className='px-'>{symbol.toUpperCase()}</div>
    </div>
    </td>
    <td className='px-6 py-1'>{name}</td>
    <td className='px-6 py-1 '>{current_price.toLocaleString()}</td>
    <td className={price_change>0?'text-green-600 px-6 py-1':'text-red-600 px-6 py-1'}>{price_change.toFixed(2)}%</td>
    <td className='px-6 py-1 '>{total_volume.toLocaleString()}</td>
    <td className=''><img src={price_change>0?chartUp:chartDown} alt="" /></td>
    </tr>)
}