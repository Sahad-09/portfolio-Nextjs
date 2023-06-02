import React from 'react'
import Image from 'next/image';

function Footer() {
  return (
    <>
     <div className=' fixed bottom-0  w-[100%] pb-3'>
      <div className=' flex w-[90%]  mx-auto justify-between'>
      <p>©2023 Lamamia. All rights reserved.</p>
        <div className=' flex space-x-3'>
          <Image className=' cursor-pointer' src='/1.png' alt='png vfv' width={25} height={25}/>
          <Image className=' cursor-pointer' src='/2.png' alt='png vfv' width={25} height={25}/>
          <Image className=' cursor-pointer' src='/3.png' alt='png vfv' width={25} height={25}/>
          <Image className=' cursor-pointer' src='/4.png' alt='png vfv' width={25} height={25}/>
        </div>
      </div> 
      </div>
    </>
  )
}

export default Footer
