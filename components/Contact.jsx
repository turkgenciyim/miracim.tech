import React from 'react'
import { BiLogoDiscordAlt } from 'react-icons/bi'
import Link from 'next/link'
import Image from 'next/image'
const Showcase = () => {
  return (
    <section className='relative z-10'>
      <Image
        src={'/discord-pattern.png'}
        fill
        alt='Contact'
        className='object-cover object-center pointer-events-none -z-10'
      />
      <div
        id='iletisim'
        className='z-10 flex flex-col items-center justify-center px-4 space-y-8 font-bold py-14'
      >
        <h2 className='px-4 text-3xl font-bold tracking-tighter text-center xs:text-4xl text-slate-100 md:text-5xl lg:text-6xl'>
          Discord üzerinden istersen <br /> sohbet edelim, istersen iş konuşalım.
        </h2>
        <Link
          href={'https://discord.com/users/619925060387340299'}
          className='flex items-center justify-between gap-8 py-4 pl-10 pr-6 text-lg transition-all shadow bg-blue-500/20 backdrop-blur-sm active:ring active:ring-primary-900 active:scale-95 md:py-5 md:pr-8 hover:bg-primary-400/50 hover:backdrop-blur-none group md:pl-14 rounded-xl'
        >
          <span className='inline-block font-bold tracking-tight text-white uppercase transition-all group-hover:text-white'>
            İletişime Geç
          </span>
          <BiLogoDiscordAlt className='w-10 h-10 transition-all duration-300 fill-primary-500  group-hover:rotate-[360deg] group-hover:fill-white' />
        </Link>
      </div>
    </section>
  )
}

export default Showcase
