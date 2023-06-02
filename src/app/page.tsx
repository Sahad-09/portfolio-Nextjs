import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <div className=' flex my-auto justify-center align-middle '>
        <div className=' w-[75%] self-center'>
          <h1 className={styles.title}>
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
  )
}
