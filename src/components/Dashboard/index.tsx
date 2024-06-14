"use client"

import { useState } from "react";
import Sidebar from "../Layout";

export default function Dashboard(){
    const [isShow,setIsShow] = useState<boolean>(true);
    return (
        <div className="flex flex-row gap-3 w-full">
            <Sidebar isShow={isShow}/>
            <div className={`px-3 py-2 ${isShow?"ml-20 w-full":"w-full"}`}>
                <div className="flex flex-col w-full">
                        <div className="app-header w-full py-3">
                            <div className="flex items-center gap-3 ml-2">
                                <button onClick={()=>setIsShow((prv)=>!prv)} id="button-toggle-menu" className="nav-link p-2">
                                    <span className="sr-only">Menu Toggle Button</span>
                                    <span className="flex items-center justify-center h-6 w-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="menu" className="lucide lucide-menu w-6 h-6 text-xl"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                                    </span>
                                </button>
                                <div className="me-auto"></div>
                                <div className="md:flex hidden items-center relative">
                                    <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                                        <i className="mdi mdi-magnify text-base opacity-60 -z-10"></i>
                                    </div>
                                    <input type="search" className="form-input pe-8 ps-4 px-3 py-1 rounded-full bg-gray-500/10 border-transparent focus:border-transparent placeholder:opacity-60" placeholder="Search..."/>
                                </div>
                                <div className="flex">
                                    <button id="light-dark-mode" type="button" className="nav-link p-2">
                                        <span className="sr-only">Light/Dark Mode</span>
                                        <span className="flex items-center justify-center h-6 w-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="moon" className="lucide lucide-moon block dark:hidden"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="sun" className="lucide lucide-sun hidden dark:block"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                                        </span>
                                    </button>
                                </div>
                                <div className="relative group">
                                    <div className="nav-link flex items-center fc-dropdown mb-1">
                                        <img src="https://buffer.com/library/content/images/2023/10/free-images.jpg" alt="user-image" className="rounded-full h-8 w-8"/>
                                        <span className="text-sm mx-2">Nowak</span>
                                        <i className="mdi mdi-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="w-full">
                    <h1 className="text-xl font-semibold ml-5">Trang chủ</h1>
                </div>
            </div>
        </div>
    )
}