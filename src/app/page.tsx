import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <div className=' w-full h-screen flex flex-col justify-between '>
      <div className='grid md:grid-cols-2  m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <h1 className='md:text-7xl sm:text-5px text-7xl bg-gradient-to-b from-[#194c33] to-[#bbb] text-transparent bg-clip-text '>
          Developers are the architects of the digital world.
          </h1>
          <p className='py-8'>
            “If you feel like there’s something out there that you’re supposed to be doing, if you have a passion for it, then stop wishing and just do it.”
          </p>
        </div>
        <div className='w-full flex items-center justify-center m-auto h-auto'>
          <Image src='/hero.png' width={700} height={600} alt='heeloo' />
        </div>
        </div>
      </div>
    </div>
  )
}
