import React from 'react'

export const Not_found : React.FC = ()=> {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-4'>
        <h1>page not found</h1>
        <p>
        The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <button
        className='bg-[#22A747] text-white px-4 py-2 rounded cursor-pointer'
        onClick={() => window.location.href = '/'}
        >Go back home</button>
    </div>
  )
}
