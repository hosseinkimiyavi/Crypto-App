import React, { useState } from 'react'


function Paginate({page , setpage}) {
    const previousHandler =()=>{
      if (page<=1)return
      else{
        setpage((page)=>page-1)
      }
    }
    const nextHandler =()=>{
      if(page>=10)return
      setpage((page)=>page+1)
      
    }
  return (
    <div>
        <div  className='flex w-96 justify-between items-center m-auto mb-24'>
        <button onClick={previousHandler} className={page==1 ? 'opacity-30 text-white w-20 p-1 ' : 'text-blue-950 rounded-lg w-20 p-1 bg-blue-400 hover:bg-blue-600 hover:rounded-lg hover:transition cursor-pointer hover:text-white hover:shadow-sm'}>Previous</button>
        <p className={page==1 ?'text-white bg-blue-600 p-2 rounded-lg':'text-white'}>1</p>
        <p className={page==2?'text-white bg-blue-600 p-2 rounded-lg':'text-white'}>2</p>
        {page>2 && page<9 &&(
          <>
          <span className='text-white'>...</span>
          <p className='text-white bg-blue-600 p-2 rounded-lg'>{page}</p>
          </>
        )}
        <span className='text-white'>...</span>
        <p className={page==9?'text-white bg-blue-600 p-2 rounded-lg':'text-white'}>9</p>
        <p className={page==10?'text-white bg-blue-600 p-2 rounded-lg':'text-white'}>10</p>
        <button onClick={nextHandler} className={page==10 ?'opacity-30 text-white w-20 p-1':'text-blue-950 rounded-lg w-20 p-1 bg-blue-400 hover:bg-blue-600 hover:rounded-lg hover:transition cursor-pointer hover:text-white  hover:shadow-sm'}>Next</button>
        </div>
    </div>
  )
}

export default Paginate