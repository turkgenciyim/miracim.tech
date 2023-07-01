import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='relative pt-6 pb-12 overflow-hidden bg-gradient-to-tr from-blue-900 via-slate-950 to-sky-950 group/container'>
      <nav className='container flex flex-col items-center justify-center p-4 mx-auto sm:flex-row'>
        <div className='flex flex-wrap justify-center flex-1 mt-6 uppercase xs:mt-0 lg:gap-4 md:flex-nowrap sm:w-1/3 sm:basis-1/2'>
          <Link
            className='flex items-center justify-center px-5 py-3 pr-0 space-x-2 font-medium tracking-tight transition-all border border-transparent rounded-lg select-none basis-1/2 sm:basis-36 md:basis-auto sm:hover:bg-slate-800 sm:active:border-slate-700 text-slate-300 group sm:hover:pr-6 hover:text-white'
            href={'/#yetenekler'}
          >
            <span> Yetenekler</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='relative left-0 hidden w-5 h-5 transition-all opacity-0 group-hover:left-2.5 sm:block group-hover:opacity-100 group-active:left-4 group-hover:text-blue-500'
            >
              <path
                fillRule='evenodd'
                d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
          <Link
            className='flex items-center justify-center px-5 py-3 pr-0 space-x-2 font-medium tracking-tight transition-all border border-transparent rounded-lg select-none basis-1/2 sm:basis-36 md:basis-auto sm:hover:bg-slate-800 sm:active:border-slate-700 text-slate-300 group sm:hover:pr-6 hover:text-white'
            href={'/#hakkimda'}
          >
            <span> Hakkımda</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='relative left-0 hidden w-5 h-5 transition-all opacity-0 group-hover:left-2.5 sm:block group-hover:opacity-100 group-active:left-4 group-hover:text-blue-500'
            >
              <path
                fillRule='evenodd'
                d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
          <Link
            className='flex items-center justify-center px-5 py-3 pr-0 space-x-2 font-medium tracking-tight transition-all border border-transparent rounded-lg select-none basis-1/2 sm:basis-36 md:basis-auto sm:hover:bg-slate-800 sm:active:border-slate-700 text-slate-300 group sm:hover:pr-6 hover:text-white'
            href={'/'}
          >
            <span>Yakında!</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='relative left-0 hidden w-5 h-5 transition-all opacity-0 group-hover:left-2.5 sm:block group-hover:opacity-100 group-active:left-4 group-hover:text-blue-500'
            >
              <path
                fillRule='evenodd'
                d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
          <Link
            className='flex items-center justify-center px-5 py-3 pr-0 space-x-2 font-medium tracking-tight transition-all border border-transparent rounded-lg select-none basis-1/2 sm:basis-36 md:basis-auto sm:hover:bg-slate-800 sm:active:border-slate-700 text-slate-300 group sm:hover:pr-6 hover:text-white'
            href={'/#iletisim'}
          >
            <span>İletişim</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='relative left-0 hidden w-5 h-5 transition-all opacity-0 group-hover:left-2.5 sm:block group-hover:opacity-100 group-active:left-4 group-hover:text-blue-500'
            >
              <path
                fillRule='evenodd'
                d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
        </div>
      </nav>
      <div className='container relative z-30 py-12 mx-auto'>
        <div className='flex flex-col items-center justify-center gap-4 mx-auto max-w-fit'>
          <div className='relative w-56 h-56 overflow-hidden rounded-full shadow-xl'>
            <Link href={'/'}>
              <Image
                src={'/me.jpg'}
                fill
                priority={true}
                alt="It's me!"
                className='transition-all brightness-50 grayscale group-hover/container:filter-none'
              />
            </Link>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold tracking-tighter uppercase xs:text-3xl sm:text-4xl text-slate-100'>
              HEYYOOOO Ben Miraç! 😉
            </h1>
            <p className='text-sm font-medium tracking-tight text-center xs:text-base text-slate-400'>
              Geliştirici, Sosyal Medya <br /> Yöneticisi ve Sigortacı
            </p>
          </div>
          <h2 className='my-8 font-sans text-6xl font-bold tracking-tighter text-center text-transparent xs:text-7xl sm:text-8xl bg-clip-text bg-gradient-to-tr from-blue-500 via-sky-500 to-teal-500'>
            <div className='relative inline-block'>
              <span className='relative z-20 text-transparent bg-clip-text title'>
                Full Stack
              </span>{' '}
              <span className='absolute inset-0 z-10 text-transparent skew-x-6 bg-sky-950 skew-y-2 -rotate-2 rounded-2xl'>
              </span>
            </div>{' '}
            Developer <br /> and UI Designer
          </h2>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              href={'https://github.com/turkgenciyim'}
              target='_blank'
              className='relative flex w-64 py-5 pl-8 pr-20 overflow-hidden text-lg font-bold text-white duration-500 shadow bg-slate-800 rounded-xl group hover:bg-slate-900 drop-shadow-xl'
            >
              <span className='z-10'>Github Profile</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute w-24 h-24 transition-all duration-700 -translate-y-1/2 -right-8 top-1/2 fill-slate-600 group-hover:fill-blue-600'
                viewBox='0 0 24 24'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
            </Link>
            <Link
              // href={'https://tr.linkedin.com/in/mirac-bakir'}
              href={'/'}
              target='_blank'
              className='relative flex w-64 py-5 pl-8 pr-20 overflow-hidden text-lg font-bold duration-500 shadow text-sky-50 bg-sky-500 rounded-xl group hover:bg-sky-600 drop-shadow-xl'
            >
              <span className='z-10'>LinkedIn Profile</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute w-16 h-16 transition-all duration-700 -translate-y-1/2 -right-2 top-1/2 fill-sky-100 group-hover:fill-white'
                viewBox='0 0 24 24'
              >
                <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute right-1/2 xl:right-20 bottom-1/2 xl:bottom-0 opacity-20 xl:opacity-100 rotate-45 translate-x-1/2 -translate-y-1/2 sm:translate-y-1/2 xl:translate-y-1/4 w-1/2 h-full xl:w-[50rem] xl:h-[50rem]'>
        <Image
          fill
          src={'/saniser.jpg'}
          className='object-contain transition-all brightness-50 grayscale group-hover/container:filter-none'
          alt=''
        />
      </div>
    </header>
  )
}

export default Header
