import { useState,useEffect } from "react";
export default function Content(){
    const [history,setHistory] = useState([]);
    async function loadData(){
        const data = await fetch("/api/historyPost",{
            method:"GET",
            mode:"cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const result = await data.json();
        setHistory(result)
    }
    useEffect(()=>{
        loadData()
    },[])

    const formatString = (str:string) =>{
        if(str.length > 83){
            return str.slice(0,83)+"..."
        }else{
            return str;
        }
    }
    console.log(history)
    return(
        <div className="min-h-screen px-3 py-2">
            <div className="flex flex-row justify-between z-0 relative">
                <h1 className="text-xl font-semibold">NỘI DUNG</h1>
                <div className="flex flex-row gap-3 px-3">
                    <button className="flex px-3 py-2 gap-2 text-black bg-white items-center rounded-md hover:bg-white">
                        <svg width={20} height={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4V3zm-6.8 9L13 8h-2.4L9 10.286 7.4 8H5l2.8 4L5 16h2.4L9 13.714 10.6 16H13l-2.8-4z"></path> </g> </g></svg>
                        <span>Xuất dữ liệu</span>
                    </button>
                    <a href="/create-content" className="flex px-3 py-2 gap-2 text-white bg-[#0a78be] items-center rounded-md hover:bg-[#236c99]">
                        <svg width={20} height={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1 6v12h9V6zm8 11H2V7h7zm-8 3h22v1H1zM1 3h22v1H1zm11 4h11v1H12zm0 3h11v1H12zm0 3h11v1H12zm0 3h11v1H12z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                        <span>Tạo bài viết</span>
                    </a>
                </div>
            </div>
            <div className="px-3 py-2 bg-white mt-3 rounded-md h-[80vh]">
                <div className="px-3 py-2 border-b mb-2 border-gray-200">
                    <ul className="flex flex-col gap-3 flex-wrap md:flex-row">
                        <li className="px-2 py-2 cursor-pointer font-semibold rounded-sm bg-[#e1edf7] text-[#0a78be]">
                            <span>Đã đăng</span>
                        </li>
                        <li className="px-2 py-2 font-normal ">
                            <span>Đã lên lịch</span>
                        </li>
                        <li className="px-2 py-2 font-normal ">
                            <span>Bản nháp</span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                            <div className="py-3 px-4">
                            <div className="relative max-w-xs">
                                <label className="sr-only">Search</label>
                                <input type="text" name="hs-table-with-pagination-search" id="hs-table-with-pagination-search" className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Search for items"/>
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                                <svg className="size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </svg>
                                </div>
                            </div>
                            </div>
                            <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead className="bg-gray-50 dark:bg-neutral-700">
                                    <tr>
                                        <th scope="col" className="py-3 px-4 pe-0">
                                        <div className="flex items-center h-5">
                                            <input id="hs-table-pagination-checkbox-all" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                                            <label htmlFor="hs-table-pagination-checkbox-all" className="sr-only">Checkbox</label>
                                        </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Tiêu đề</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Thời gian</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Nơi đăng</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    {history.map((dt:any,i)=>{
                                        const date = dt.time;
                                        const dateFormat = new Date(date).toLocaleString();
                                        return(
                                            <tr key={i}>
                                                <td className="py-3 ps-4">
                                                <div className="flex items-center h-5">
                                                    <input id="hs-table-pagination-checkbox-1" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                                                    <label className="sr-only">Checkbox</label>
                                                </div>
                                                </td>
                                                <td dangerouslySetInnerHTML={{__html:formatString(dt.title)}} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"/>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{dateFormat}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{dt.placePost}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                <p className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-700">{dt.status}</p>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    
                                </tbody>
                            </table>
                            </div>
                            <div className="py-1 px-4">
                            <nav className="flex items-center space-x-1">
                                <button type="button" className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10">
                                <span aria-hidden="true">«</span>
                                <span className="sr-only">Previous</span>
                                </button>
                                <button type="button" className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10" aria-current="page">1</button>
                                <button type="button" className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10">2</button>
                                <button type="button" className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10">3</button>
                                <button type="button" className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10">
                                <span className="sr-only">Next</span>
                                <span aria-hidden="true">»</span>
                                </button>
                            </nav>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}