import React from 'react'

const page = () => {
  return (
    <div className='container p-14 flex flex-col gap-10'>
      <h1 className='text-6xl font-bold'>Blog</h1>
      <div className="blog-contanier flex gap-10">
        <div className="blog p-10 border border-gray-800 rounded-xl flex flex-col">
          <h1 className='text-2xl font-bold'>Articulo</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>          
        </div>
      </div>
    </div>
  )
}

export default page