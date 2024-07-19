import React, { useEffect, useState } from 'react'
import Tables from '../modules/Tables';
import { GetcoinList } from '../../services/cryptoApi';
import Paginate from '../modules/Paginate';
import Search from '../modules/Search';

function Homepage() {
    const[coines,setcoines]=useState([])
    const [isloading,setloading]=useState(true)
    const [page,setpage] =useState(1)
    const [currency , setcurrency] = useState("usd")

    useEffect(()=>{
        const GetData = async()=>{
          setloading(true)
            const res = await fetch(GetcoinList(page ,currency))
            const json = await res.json();
            setcoines(json)
            setloading(false)
        }
        GetData();
    },[page, currency]);
  return (
    <>
    <Search currency={currency} setcurrency={setcurrency} />
    <Tables coines={coines} loading ={isloading} />
    <Paginate page={page} setpage={setpage} />
    </>
  )
}

export default Homepage

