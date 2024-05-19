export default function Layout({children}:{children:any}){
    return(
        <div className="flex flex-row bg-[#f3f4f6]">
            <div className="w-64 flex flex-col flex-shrink-0 antialiased bg-gray-50 text-gray-800">
            <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
                <div className="flex items-center justify-center h-14 border-b">
                <div>ADMIN PAGE</div>
                </div>
                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                <ul className="flex flex-col py-4 space-y-1">
                    <li className="px-5">
                    <div className="flex flex-row items-center h-8">
                        <div className="text-sm font-light tracking-wide text-gray-500">Menu</div>
                    </div>
                    </li>
                    <li>
                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span className="inline-flex justify-center items-center ml-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Trang chủ</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span className="inline-flex justify-center items-center ml-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Tin nhắn</span>
                        <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
                    </a>
                    </li>
                    <li>
                        <a href="/content" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Nội dung</span>
                        </a>
                    </li>
                    <li className="px-5">
                    <div className="flex flex-row items-center h-8">
                        <div className="text-sm font-light tracking-wide text-gray-500">Nhiệm vụ</div>
                    </div>
                    </li>
                    <li>
                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span className="inline-flex justify-center items-center ml-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Nhiệm vụ</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span className="inline-flex justify-center items-center ml-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Thành viên</span>
                        <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">15</span>
                    </a>
                    </li>
                    <li className="px-5">
                    <div className="flex flex-row items-center h-8">
                        <div className="text-sm font-light tracking-wide text-gray-500">Quản lý</div>
                    </div>
                    </li>
                    <li>
                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span className="inline-flex justify-center items-center ml-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Thông tin</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span className="inline-flex justify-center items-center ml-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Đăng xuất</span>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <div className="flex flex-col px-4 w-full bg-[#f3f4f6]">
                <div className="app-header w-full py-3">
                    <div className="flex items-center gap-3">
                        <button id="button-toggle-menu" className="nav-link p-2">
                            <span className="sr-only">Menu Toggle Button</span>
                            <span className="flex items-center justify-center h-6 w-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="menu" className="lucide lucide-menu w-6 h-6 text-xl"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="moon" className="lucide lucide-moon block dark:hidden"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="sun" className="lucide lucide-sun hidden dark:block"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                                </span>
                            </button>
                        </div>
                        <div className="relative group">
                            <div>
                                <button type="button" className="nav-link flex items-center fc-dropdown mb-1">
                                    <img src="https://buffer.com/library/content/images/2023/10/free-images.jpg" alt="user-image" className="rounded-full h-8 w-8"/>
                                    <span className="text-sm mx-2">Nowak</span>
                                    <i className="mdi mdi-chevron-down"></i>
                                </button>
                                <div className="w-44 z-50 absolute right-0 hidden group-hover:block transition-[margin,opacity] duration-300 shadow-lg border rounded py-2 border-gray-200">
                                    <a className="flex items-center py-2 px-5 text-sm text-gray-800 " href="pages-gallery.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="user" className="lucide lucide-user w-4 h-4 me-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <span>My Account</span>
                                    </a>
                                    <hr className="my-2 -mx-2 border-gray-200 dark:border-gray-700"/>
                                    <a className="flex items-center py-2 px-5 text-sm text-gray-800" href="auth-login.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="log-out" className="lucide lucide-log-out w-4 h-4 me-2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>
                                        <span>Đăng xuất</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}