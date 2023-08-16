import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="relative pt-6 pb-12 overflow-hidden bg-gradient-to-tr from-violet-900 via-slate-950 to-sky-950 group/container">
      <nav className="container flex flex-col items-center justify-center p-4 mx-auto sm:flex-row">
        <div className="flex flex-wrap justify-center flex-1 mt-6 uppercase xs:mt-0 lg:gap-4 md:flex-nowrap sm:w-1/3 sm:basis-1/2">
          <Link
            className="flex items-center justify-center px-5 py-3 pr-0 space-x-2 font-medium tracking-tight transition-all border border-transparent rounded-lg select-none basis-1/2 sm:basis-36 md:basis-auto sm:hover:bg-slate-800 sm:active:border-slate-700 text-slate-300 group sm:hover:pr-6 hover:text-white"
            href={"/#yetenekler"}
          >
            <span> Yetenekler</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="relative left-0 hidden w-5 h-5 transition-all opacity-0 group-hover:left-2.5 sm:block group-hover:opacity-100 group-active:left-4 group-hover:text-violet-500"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            className="flex items-center justify-center px-5 py-3 pr-0 space-x-2 font-medium tracking-tight transition-all border border-transparent rounded-lg select-none basis-1/2 sm:basis-36 md:basis-auto sm:hover:bg-slate-800 sm:active:border-slate-700 text-slate-300 group sm:hover:pr-6 hover:text-white"
            href={"/#hakkimda"}
          >
            <span> Hakkımda</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="relative left-0 hidden w-5 h-5 transition-all opacity-0 group-hover:left-2.5 sm:block group-hover:opacity-100 group-active:left-4 group-hover:text-violet-500"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            className="flex items-center justify-center px-5 py-3 pr-0 space-x-2 font-medium tracking-tight transition-all border border-transparent rounded-lg select-none basis-1/2 sm:basis-36 md:basis-auto sm:hover:bg-slate-800 sm:active:border-slate-700 text-slate-300 group sm:hover:pr-6 hover:text-white"
            href={"/"}
          >
            <span>Yakında!</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="relative left-0 hidden w-5 h-5 transition-all opacity-0 group-hover:left-2.5 sm:block group-hover:opacity-100 group-active:left-4 group-hover:text-violet-500"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            className="flex items-center justify-center px-5 py-3 pr-0 space-x-2 font-medium tracking-tight transition-all border border-transparent rounded-lg select-none basis-1/2 sm:basis-36 md:basis-auto sm:hover:bg-slate-800 sm:active:border-slate-700 text-slate-300 group sm:hover:pr-6 hover:text-white"
            href={"/#iletisim"}
          >
            <span>İletişim</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="relative left-0 hidden w-5 h-5 transition-all opacity-0 group-hover:left-2.5 sm:block group-hover:opacity-100 group-active:left-4 group-hover:text-violet-500"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </nav>
      <div className="container relative z-30 py-12 mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 mx-auto max-w-fit">
          <div className="relative w-56 h-56 overflow-hidden rounded-full shadow-xl">
            <Link href={"/"}>
              <Image
                src={"/me.jpg"}
                fill
                priority={true}
                alt="It's me!"
                className="transition-all brightness-50 grayscale group-hover/container:filter-none"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold tracking-tighter uppercase xs:text-3xl sm:text-4xl text-slate-100">
              Selam, Ben Miraç! 😉
            </h1>
            <p className="text-sm font-medium tracking-tight text-center xs:text-base text-slate-400">
              Geliştirici, Sosyal Medya <br /> Yöneticisi ve Sigortacı
            </p>
          </div>
          <h2 className="my-8 font-sans text-6xl font-bold tracking-tighter text-center text-transparent xs:text-7xl sm:text-8xl bg-clip-text bg-gradient-to-tr from-violet-500 via-indigo-500 to-purple-500">
            <div className="relative inline-block">
              <span className="relative z-20 text-transparent bg-clip-text title">
                Frontend
              </span>{" "}
              <span className="absolute inset-0 z-10 text-transparent skew-x-6 bg-violet-950 skew-y-2 -rotate-2 rounded-2xl"></span>
            </div>{" "}
            Developer <br /> and UI Designer
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={"https://github.com/turkgenciyim"}
              target="_blank"
              className="relative flex w-64 py-5 pl-8 pr-20 overflow-hidden text-lg font-bold text-white duration-500 border border-transparent shadow active:scale-95 bg-slate-700 rounded-xl hover:border-slate-900 group hover:bg-gray-800 drop-shadow-xl"
            >
              <span className="z-10">Github Profile</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-24 h-24 transition-all duration-700 -translate-y-1/2 -right-8 top-1/2 fill-slate-100 group-hover:fill-blue-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
            <Link
              // href={'https://tr.linkedin.com/in/mirac-bakir'}
              href={"/"}
              className="relative flex w-64 py-5 pl-8 pr-20 overflow-hidden text-lg font-bold text-white duration-500 bg-pink-500 border border-transparent shadow hover:border-pink-950 active:scale-95 rounded-xl group hover:bg-pink-600 drop-shadow-xl"
            >
              <span className="z-10">Dribbble Profile</span>

              <svg
                className="absolute w-16 h-16 transition-all duration-700 -translate-y-1/2 -right-6 top-1/2 fill-blue-100 group-hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M11.455 9.985c-1.419.417-3.11.632-5.067.646.405-1.654 1.518-3.03 3.003-3.784.777 1.016 1.464 2.063 2.064 3.138zm.965 1.93c-.124-.28-.254-.559-.391-.835-1.622.51-3.561.769-5.804.772l-.008.148c0 1.404.504 2.692 1.34 3.695 1.266-1.901 2.891-3.164 4.863-3.78zm-3.97 4.641c1.569 1.225 3.671 1.589 5.624.836-.252-1.488-.65-2.94-1.19-4.352-1.819.542-3.285 1.714-4.434 3.516zm7.075-9.13c-.977-.754-2.197-1.209-3.525-1.209-.49 0-.964.068-1.418.184.764 1.028 1.441 2.086 2.035 3.172 1.236-.524 2.204-1.24 2.908-2.147zm8.475 4.574c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5 0c0-3.866-3.135-7-7-7s-7 3.134-7 7 3.135 7 7 7 7-3.134 7-7zm-5.824-1.349c.157.324.305.651.447.98 1.26-.217 2.641-.204 4.143.042-.073-1.292-.566-2.474-1.354-3.403-.807 1.005-1.89 1.798-3.236 2.381zm.914 2.132c.489 1.309.865 2.651 1.119 4.023 1.312-.88 2.241-2.284 2.497-3.909-1.317-.228-2.522-.268-3.616-.114z" />{" "}
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute right-1/2 xl:right-20 bottom-1/2 xl:bottom-0 opacity-20 xl:opacity-100 rotate-45 translate-x-1/2 -translate-y-1/2 sm:translate-y-1/2 xl:translate-y-1/4 w-1/2 h-full xl:w-[50rem] xl:h-[50rem]">
        <Image
          fill
          src={"/saniser.jpg"}
          className="object-contain transition-all brightness-50 grayscale group-hover/container:filter-none"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
