"use client"

import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDB913] via-[#F59E0B] to-[#EA580C] opacity-90" />

      <div className="absolute inset-0">
        <img src="/fondo.png" alt="Paellas La Serena" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8">
          <div className="relative inline-flex flex-col items-center text-center">
            <h1 className="hero-title text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-orange-200 drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)] leading-tight text-balance">
             La Combinación Perfecta de Sabor y Armonía
            </h1>
          </div>

          

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            {"Aut\u00e9nticas paellas espa\u00f1olas preparadas con los mejores mariscos frescos y ingredientes premium"}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                const element = document.getElementById("menu")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="14" y1="18" y2="18" />
              </svg>
              <span>Ver Menu</span>
            </button>
            <a
              href="https://wa.me/56932531678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#20BA5A] px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
                <path d="M16 3C9.373 3 4 8.373 4 15c0 2.63.86 5.08 2.322 7.08L4.276 29l7.144-2.086A11.924 11.924 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.4a9.36 9.36 0 0 1-4.77-1.31l-.343-.204-4.237 1.238 1.303-4.132-.222-.338A9.322 9.322 0 0 1 6.6 15c0-5.166 4.234-9.4 9.4-9.4s9.4 4.234 9.4 9.4-4.234 9.4-9.4 9.4zm5.414-7.027c-.295-.147-1.742-.86-2.012-.958-.27-.098-.467-.147-.664.147-.197.295-.761.958-.932 1.155-.17.197-.343.221-.637.074-.295-.147-1.242-.458-2.366-1.46-.874-.78-1.462-1.744-1.635-2.038-.17-.295-.018-.454.13-.6.134-.133.295-.343.443-.514.147-.17.197-.295.295-.492.098-.197.049-.369-.025-.516-.074-.147-.664-1.603-.91-2.194-.24-.576-.485-.498-.664-.507-.17-.009-.369-.011-.566-.011-.197 0-.516.074-.787.369-.27.295-1.03 1.007-1.03 2.459 0 1.452 1.055 2.853 1.202 3.048.147.197 2.077 3.177 5.036 4.455.704.303 1.253.484 1.681.62.705.224 1.344.192 1.85.116.564-.084 1.742-.71 1.988-1.394.245-.684.245-1.27.171-1.394-.074-.124-.27-.197-.566-.344z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/90">
        <ChevronDown className="w-6 h-6 animate-bounce" />
        <span className="text-sm md:text-base font-medium tracking-wide">
          {"Desliza para ver m\u00e1s"}
        </span>
      </div>
      <style jsx>{`
        .hero-title {
          position: relative;
          display: inline-block;
          letter-spacing: 0.04em;
          background-size: 250% 250%;
          animation: hero-title-flare 6s ease-in-out infinite;
        }

        @keyframes hero-title-flare {
          0%,
          100% {
            background-position: 0% 50%;
            filter: drop-shadow(0 0 18px rgba(255, 255, 255, 0.35)) drop-shadow(0 14px 40px rgba(234, 88, 12, 0.35));
          }
          50% {
            background-position: 100% 50%;
            filter: drop-shadow(0 0 24px rgba(255, 247, 237, 0.55)) drop-shadow(0 20px 55px rgba(253, 186, 116, 0.45));
          }
        }
      `}</style>
    </section>
  )
}
