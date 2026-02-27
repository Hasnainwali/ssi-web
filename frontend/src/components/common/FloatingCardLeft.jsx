import { Box, Code, PenTool, BookAIcon, } from 'lucide-react'
import React from 'react'

const FloatingCardLeft = () => {


    return (
        <div className="hidden sm:flex justify-center absolute z-10 bottom-4 left-6 animate-slide-in-left p-4 perspective-[1000px]">
            <div className="relative w-60 h-56 transition-transform duration-700 rotate-y-50 hover:rotate-y-0 hover:scale-110 hover:-translate-y-6">
                <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="relative z-10 w-full h-full bg-slate-800/60 backdrop-blur-2xl border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl">
                    <div className="text-center p-10">
                        <Box className="w-20 h-20 text-blue-500 mx-auto mb-4 animate-pulse
                        hover:scale-125 transition-transform duration-300 ease-in-out" />
                        <h3 className="text-2xl font-bold text-white mb-2">3D Modelar</h3>
                        <div className="w-full bg-slate-700 h-2 rounded-full mt-4 overflow-hidden">
                            <div className="bg-blue-500 w-3/4 h-full animate-loading-bar" />
                        </div>
                        <div className="flex justify-between text-xs text-slate-400 mt-2">
                            <span>Progress</span>
                            <span>100%</span>
                        </div>
                    </div>
                </div>

                {/* Floating Icons */}
                {/* <div className="absolute -top-10 right-10 bg-[#1E293B] p-4 rounded-xl shadow-xl border border-white/10 animate-bounce-slow">
                    <PenTool className="text-emerald-400 w-6 h-6" />
                </div>
                <div className="absolute -bottom-10 left-10 bg-[#1E293B] p-4 rounded-xl shadow-xl border border-white/10 animate-bounce-slow delay-75">
                    <Box className="text-amber-400 w-6 h-6" />
                </div> */}

            </div>
        </div>
    )
}

export default FloatingCardLeft