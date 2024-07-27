import React, { useEffect, useState } from 'react'
import { searchCoin } from '../../services/cryptoApi'

function Search({currency , setcurrency}) {
    const [text,settext]=useState("")
    const [coins,setcoins]=useState([])

    useEffect(()=>{
        if(!text) return;
        const controller=new AbortController();
        const signal = controller.signal;
       
          const search =async()=>{
            try{
            const res=await fetch(searchCoin(text),{signal:signal})
            const json=await res.json();
            console.log(json);
            if (json.coins) {setcoins(json.coins)} else{
              alert(json.status.error_message)
            }   
          }        catch (error) {
            if(error.name !=='AbortError'){
              alert(error.message)
            }
          } 
        }

      
  
      search();
      return()=>controller.abort()
    
    },[text])
  return (
    <div>
        <div>
            <input type="search" value={text} onChange={e=>settext(e.target.value)}  />
            <select value={currency} onChange={e=>setcurrency(e.target.value)}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>
            </select>
        </div>

    </div>
  )
}

export default Search