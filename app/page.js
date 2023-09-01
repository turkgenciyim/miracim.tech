"use client";

import { AiFillHeart } from "react-icons/ai";
import About from "@/components/About";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Status from "@/components/Status";
export default function Home() {
  return (
    <main className="overflow-hidden bg-slate-950">
      <Header />
      <div className="relative flex items-center justify-center p-1.5 md:p-2.5 overflow-hidden font-bold text-center text-white rleative bg-gradient-to-tr from-purple-500 to-indigo-500">
       
        <AiFillHeart className="absolute hidden sm:block brightness-50 md:brightness-100 md:opacity-100 scale-[3] left-1/4 top-10 animate-pulse fill-purple-200 drop-shadow-xl  rotate-6" />
        <span className="absolute hidden sm:block brightness-50 md:brightness-100 md:opacity-100 scale-[3] right-1/4 top-8 fill-purple-200 drop-shadow-xl  rotate-6">
          🫡
        </span>
      </div>
      <Skills />
      <About />
      <Contact />
      {/* <Status/>  */}
    </main>
  );
}
