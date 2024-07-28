import React, { useEffect, useState } from 'react'
import { searchCoin } from '../../services/cryptoApi'
import { RotatingLines } from 'react-loader-spinner'

function Search({currency , setcurrency}) {
    const [text,settext]=useState("")
    const [coins,setcoins]=useState([])
    const [loading,setloading] = useState(false)

    useEffect(()=>{
      setcoins([]);
        if(!text){
          setloading(false)
          return;
        };
        const controller=new AbortController();
        const signal = controller.signal;
       
          const search =async()=>{
            try{
            const res=await fetch(searchCoin(text),{signal:signal})
            const json=await res.json();
            console.log(json);
            if (json.coins) {setcoins(json.coins)
              setloading(false)
            } else{
              alert(json.status.error_message)
            }   
          }        catch (error) {
            if(error.name !=='AbortError'){
              alert(error.message)
            }
          } 
          
        }

      
        setloading(true)
  
      search();
      return()=>controller.abort()
    
    },[text])
  return (
    <div>
      <div className='flex items-center justify-center mt-52'>
        <div className='' >
            <input className='outline-none p-1 w-64 font-semibold fonfont-serif  rounded-lg mr-2 bg-blue-300' type="search" value={text} onChange={e=>settext(e.target.value)}  />
            <select className='outline-none p-1 rounded-2xl bg-blue-200 font-semibold' value={currency} onChange={e=>setcurrency(e.target.value)}>
                <option className='font-semibold bg-blue-200' value="usd">USD</option>
                <option className='font-semibold bg-blue-200' value="eur">EUR</option>
                <option className='font-semibold bg-blue-200' value="jpy">JPY</option>
            </select>
           {(!!coins.length || loading) &&( <div className='bg-slate-900 mt-4  h-96 rounded-lg absolute overflow-y-scroll text-center w-64 pb-5 border-2 border-blue-950 shadow-md shadow-purple-300 '>
              {loading && <RotatingLines width='50px' height='50px' strokeColor="white" />}
              <ul  className=''>
                {coins.map(coin=><li className='flex  items-center justify-center p-4 border border-blue-400'  key={coin.id}>
                  <img src={coin.thumb} alt={coin.name} />
                  <p className='text-white font-medium'>{coin.name}</p>
                </li>)}
              </ul>
            </div>)}
        </div>
        </div>

    </div>
  )
}

export default Search