import React from 'react'
import Headers from '../Headers/Headers'
function Layout({children}) {
  return (
    <>
    <Headers />
    {children}
    <footer className='bg-blue-500 w-2/4 border border-2 h-14 rounded-2xl border-blue-800 m-auto mb-10'>
    <p className='text-blue-200 font-bold text-center mt-3'>Developed by Hossein Kimiyavi</p>
    </footer>

    </>
  )
}

export default Layout