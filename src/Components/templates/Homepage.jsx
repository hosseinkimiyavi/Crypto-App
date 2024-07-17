import React, { useEffect, useState } from 'react'
import Tables from '../modules/Tables';
import { GetcoinList } from '../../services/cryptoApi';
import Paginate from '../modules/Paginate';

function Homepage() {
    const[coines,setcoines]=useState([])
    const [isloading,setloading]=useState(true)
    const [page,setpage] =useState(1)


    useEffect(()=>{
        const GetData = async()=>{
          setloading(true)
            const res = await fetch(GetcoinList(page))
            const json = await res.json();
            setcoines(json)
            setloading(false)
        }
        GetData();
    },[page]);
  return (
    <>
    <Tables coines={coines} loading ={isloading} />
    <Paginate page={page} setpage={setpage} />
    </>
  )
}

export default Homepage

