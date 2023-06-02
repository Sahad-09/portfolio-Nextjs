import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
      <h1 className=' text-6xl mt-10 mb-5 border-opacity-30 border-b-4 border-[#199A46] inline-block '>My Work:</h1>
      <div className=' flex gap-6'>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><Image /></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><Image /></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><Image /></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page