export default function Content(){
    return(
        <div className="min-h-screen px-3 py-2">
            <h1 className="text-xl font-semibold">NỘI DUNG</h1>
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