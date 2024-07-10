import React, { useEffect, useState } from 'react'
import Tables from '../modules/Tables';
import { GetcoinList } from '../../services/cryptoApi';

function Homepage() {
    const[coines,setcoines]=useState([])
    const [isloading,setloading]=useState(true)

    useEffect(()=>{
        const GetData = async()=>{
            const res = await fetch(GetcoinList())
            const json = await res.json();
            setcoines(json)
            setloading(false)
        }
        GetData();
    },[]);
  return (
    <>
    <Tables coines={coines} loading ={isloading} />
    </>
  )
}

export default Homepage

