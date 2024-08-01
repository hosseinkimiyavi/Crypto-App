import React from 'react'

function Layout({children}) {
  return (
    <>
    <header className='bg-blue-500 w-2/4 border border-2 h-14 rounded-2xl border-blue-700 m-auto mt-16'>
        <h1 className='text-blue-300 font-bold text-center mt-3'>Crypto App</h1>
    </header>
    {children}
    <footer className='bg-blue-500 w-2/4 border border-2 h-14 rounded-2xl border-blue-800 m-auto mb-10'>
    <p className='text-blue-200 font-bold text-center mt-3'>Developed by Hossein Kimiyavi</p>
    </footer>

    </>
  )
}

export default Layout