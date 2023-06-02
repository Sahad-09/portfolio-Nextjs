import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <div className=' w-full h-screen flex flex-col justify-between my-auto align-middle '>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2'>
          <h1 className='text-7xl bg-gradient-to-b from-[#194c33] to-[#bbb] text-transparent bg-clip-text '>
          Developers are the architects of the digital world.
          </h1>
          <p>
            “If you feel like there’s something out there that you’re supposed to be doing, if you have a passion for it, then stop wishing and just do it.”
          </p>
        </div>
        <div className=' self-center'>
          <Image src='/hero.png' width={700} height={600} alt='heeloo' />
        </div>
        </div>
      </div>
    </div>
  )
}
