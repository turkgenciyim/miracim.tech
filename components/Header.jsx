import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='relative'>
      <Image
        src={'/header-pattern.png'}
        fill
        alt='Header'
        priority
        className='object-cover object-center pointer-events-none'
      />
      <div className='relative z-10 pt-6 pb-12 overflow-hidden group/container'>
        <nav className='container flex flex-col items-center justify-center p-4 mx-auto sm:flex-row'>
          <div
            className='sticky top-0 flex flex-wrap justify-center flex-1 gap-2 p-2 md:mt-6 uppercase md:border rounded-full md:backdrop-blur-[2px] md:bg-primary-500/10
         xs:mt-0 md:flex-nowrap sm:w-1/3 sm:basis-1/2 border-primary-600/10 max-w-fit'
          >
            <Link
              href={'/#becerilerim'}
              className='px-6 py-1.5 font-medium transition-all w-full text-center rounded-3xl text-white bg-primary-50/10 border border-transparent hover:border-primary-500/40 active:scale-95
             hover:bg-primary-950 hover:text-white'
            >
              Becerilerim
            </Link>
            <Link
              href={'/#hakkimda'}
              className='px-6 py-1.5 font-medium transition-all w-full text-center rounded-full text-white bg-primary-50/10 border border-transparent hover:border-primary-500/40 active:scale-95
             hover:bg-primary-950 hover:text-white'
            >
              Hakkımda
            </Link>
            <Link
              href={'/#sozluk'}
              className='px-6 py-1.5 font-medium transition-all w-full text-center rounded-full text-white bg-primary-50/10 border border-transparent hover:border-primary-500/40 active:scale-95
             hover:bg-primary-950 hover:text-white'
            >
              Sözlük
            </Link>
          </div>
        </nav>
        <div className='container relative z-30 py-6 mx-auto sm:py-12'>
          <div className='flex flex-col items-center justify-center gap-4 mx-auto max-w-fit'>
            <div className='relative overflow-hidden rounded-full w-72 h-72'>
              <Link href={'/'}>
                <Image
                  src={'/me.jpg'}
                  fill
                  priority={true}
                  alt="He's me!"
                  className='transition-all'
                />
              </Link>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-2xl font-bold tracking-tighter text-gray-100 uppercase xs:text-3xl sm:text-4xl'>
                Selam, Ben Miraç! 😉
              </h1>
              <p className='text-sm font-medium tracking-tight text-center text-gray-400 xs:text-base'>
                Önyüz Geliştirici ve Acente Sigorta Personeli
              </p>
            </div>
            <h2 className='pb-4 my-8 font-sans text-6xl font-bold tracking-tighter text-center text-transparent xs:text-7xl sm:text-8xl bg-clip-text bg-gradient-to-tr from-primary-500 to-primary-300'>
              <div className='relative inline-block'>
                <span className='relative z-20 text-transparent bg-clip-text title'>
                  Frontend
                </span>{' '}
                <span className='absolute inset-0 z-10 text-transparent skew-x-6 bg-primary-900 skew-y-2 -rotate-2 rounded-2xl'></span>
              </div>{' '}
              Developer <br /> Insurance Person
            </h2>
            <div className='flex flex-wrap justify-center gap-4'>
              <Link
                href={'https://github.com/turkgenciyim'}
                target='_blank'
                className='relative flex w-64 py-5 pl-8 pr-20 overflow-hidden text-lg font-bold text-white duration-500 border shadow border-primary-900 bg-primary-950/60 active:scale-95 rounded-xl hover:border-primary-900 group hover:bg-primary-800 drop-shadow-xl'
              >
                <span className='z-10'>Github Profile</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute w-24 h-24 transition-all duration-700 -translate-y-1/2 -right-8 top-1/2 fill-primary-500 group-hover:fill-white'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
              </Link>
              <Link
                href={'https://dribbble.com/miracim'}
                target='_blank'
                className='relative flex w-64 py-5 pl-8 pr-20 overflow-hidden text-lg font-bold text-white duration-500 border shadow border-rose-900 bg-rose-950/60 active:scale-95 rounded-xl hover:border-rose-900 group hover:bg-rose-800 drop-shadow-xl'
              >
                <span className='z-10'>Dribbble Profile</span>
                <svg
                  className='absolute w-24 h-24 transition-all duration-700 -translate-y-1/2 -right-8 top-1/2 fill-rose-500 group-hover:fill-white'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path d='M11.455 9.985c-1.419.417-3.11.632-5.067.646.405-1.654 1.518-3.03 3.003-3.784.777 1.016 1.464 2.063 2.064 3.138zm.965 1.93c-.124-.28-.254-.559-.391-.835-1.622.51-3.561.769-5.804.772l-.008.148c0 1.404.504 2.692 1.34 3.695 1.266-1.901 2.891-3.164 4.863-3.78zm-3.97 4.641c1.569 1.225 3.671 1.589 5.624.836-.252-1.488-.65-2.94-1.19-4.352-1.819.542-3.285 1.714-4.434 3.516zm7.075-9.13c-.977-.754-2.197-1.209-3.525-1.209-.49 0-.964.068-1.418.184.764 1.028 1.441 2.086 2.035 3.172 1.236-.524 2.204-1.24 2.908-2.147zm8.475 4.574c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5 0c0-3.866-3.135-7-7-7s-7 3.134-7 7 3.135 7 7 7 7-3.134 7-7zm-5.824-1.349c.157.324.305.651.447.98 1.26-.217 2.641-.204 4.143.042-.073-1.292-.566-2.474-1.354-3.403-.807 1.005-1.89 1.798-3.236 2.381zm.914 2.132c.489 1.309.865 2.651 1.119 4.023 1.312-.88 2.241-2.284 2.497-3.909-1.317-.228-2.522-.268-3.616-.114z' />{' '}
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
