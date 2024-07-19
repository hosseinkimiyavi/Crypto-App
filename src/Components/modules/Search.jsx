import React from 'react'

function Search({currency , setcurrency}) {
  return (
    <div>
        <div>
            <input type="text" />
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