export default function Content(){
    return(
        <div className="min-h-screen px-3 py-2">
            <div className="flex flex-row justify-between z-0 relative">
                <h1 className="text-xl font-semibold">NỘI DUNG</h1>
                <div className="flex flex-row gap-3 px-3">
                    <button className="flex px-3 py-2 gap-2 text-black bg-white items-center rounded-md hover:bg-white">
                        <svg width={20} height={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4V3zm-6.8 9L13 8h-2.4L9 10.286 7.4 8H5l2.8 4L5 16h2.4L9 13.714 10.6 16H13l-2.8-4z"></path> </g> </g></svg>
                        <span>Xuất dữ liệu</span>
                    </button>
                    <a href="/create-content" className="flex px-3 py-2 gap-2 text-white bg-[#0a78be] items-center rounded-md hover:bg-[#236c99]">
                        <svg width={20} height={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1 6v12h9V6zm8 11H2V7h7zm-8 3h22v1H1zM1 3h22v1H1zm11 4h11v1H12zm0 3h11v1H12zm0 3h11v1H12zm0 3h11v1H12z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
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
                <div className="flex flex-row">
                    
                </div>
            </div>
        </div>
    )
}