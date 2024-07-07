import React, { useEffect, useState } from 'react'
import Tables from '../modules/Tables';
import { GetcoinList } from '../../services/cryptoApi';

function Homepage() {
    const[coines,setcoines]=useState([])

    useEffect(()=>{
        const GetData = async()=>{
            const res = await fetch(GetcoinList())
            const json = await res.json();
            setcoines(json)
        }
        GetData();
    },[]);
  return (
    <>
    <Tables coines={coines} />
    </>
  )
}

export default Homepage

