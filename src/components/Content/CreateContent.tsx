import { useState } from "react";
import DropDown from "../DropDown/DropDown";
import axios from "axios";


interface Data {
    name: string,
    value: string
}

const DataPost = [
    {
        name:"Bài Báo Khoa Học",
        value:"baibaokhoahoc"
    },
    {
        name:"Bài Báo Hội Thảo",
        value:"baibaohoithao"
    },
    {
        name:"Đề tài nghiên cứu",
        value:"detainghiencuu"
    },
    {
        name:"Tin tức - Sự kiện",
        value:"tintucsukien"
    }
]

export default function CreateContent(){
    const [select,setSelect] = useState('');
    const [writer,setWriter] = useState('');
    const [years,setYears] = useState('');
    const [volume,setVolume] = useState('');
    const [content,setContent] = useState('');
    const [link,setLink] = useState('');
    const [isCreate, setIsCreate] = useState<any>(null);

    const formatString = (str:string) =>{
        if(str.length > 63){
            return str.slice(0,63)+"..."
        }else{
            return str;
        }
    }
    
    const formatStringDescription = (str:string) =>{
        if(str.length > 159){
            return str.slice(0,159)+"..."
        }else{
            return str;
        }
    }
    const handleCreateScientificArticle = async() =>{
        const result = await axios.post("/api/content",{
            writer: writer,
            volume: volume,
            content: content,
            years: years.slice(0,4),
            link: link
        },{
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
        if(result){
            setIsCreate(true)
            setWriter('');
            setYears('')
            setContent('')
            setVolume('')
            setLink('')
            setIsCreate(null)
        }else{
            setIsCreate(false)
        }
    }
    const handleSubmit = () =>{
        if(select=="baibaokhoahoc"){
            handleCreateScientificArticle()
        }
    }
    console.log(years.slice(0,4))
    return(
        <div className="min-h-screen px-3 py-2">
            <h1 className="text-xl font-semibold">TẠO NỘI DUNG</h1>
            <div className="px-3 grid grid-cols-1 gap-5 md:grid-cols-2 py-2 mt-3 rounded-md h-[80vh]">
                <div className="bg-white md:w-full lg:w-3/4 flex flex-col justify-between">
                    <div>
                        {isCreate == true &&(
                            <div className="mt-2 px-5 py-2">
                                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
                                    <p className="text-sm font-semibold">Trạng thái đăng bài: Thành công</p>
                                </div>
                            </div>
                        )}
                        {
                            isCreate == false && (
                                <div className="mt-2 px-5 py-2">
                                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
                                        <p className="text-sm font-semibold">Trạng thái đăng bài: Thất bại</p>
                                    </div>
                                </div>
                            )
                        }
                        <div className="mt-2 px-5 py-2">
                            <label>Đăng lên</label>
                            <DropDown select={select} setSelect={setSelect} options={"mt-2"} data={DataPost}/>
                        </div>
                        {select=="tintucsukien"&&(
                            <div className="mt-2 px-5 py-2">
                                <label>Hình Ảnh</label>
                                <div className="w-full mt-2 relative border-2 border-gray-300 border-dashed rounded-lg p-6" id="dropzone">
                                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" />
                                    <div className="text-center">
                                        <img className="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt=""/>
                                        <h3 className="mt-2 text-sm font-medium text-gray-900">
                                            <label className="relative cursor-pointer">
                                                <span>Drag and drop</span>
                                                <span className="text-indigo-600"> or browse </span>
                                                <span>to upload</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                                            </label>
                                        </h3>
                                        <p className="mt-1 text-xs text-gray-500">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                    <img src="" className="mt-4 mx-auto max-h-40 hidden" id="preview"/>
                            </div>
                            </div>
                        )}
                        {select=="tintucsukien"?(
                            <div className="mt-2 px-5 py-2">
                                <label>Tiêu đề</label>
                                <input className="px-3 text-sm py-2 mt-2 outline-none border-gray-300 w-full resize-none border rounded-md placeholder:text-sm"/>  
                            </div>
                        ):(
                            (
                                <div className="px-5 py-2">
                                    <div className="py-2">
                                        <label>Người viết bài báo (những người tham gia bài báo)</label>
                                        <input onChange={(e)=>setWriter(e.target.value)} className="px-3 text-sm py-2 mt-2 outline-none border-gray-300 w-full resize-none border rounded-md placeholder:text-sm"/>  
                                    </div>
                                    <div className="mt-2 py-2">
                                        <label>Năm viết bài báo</label>
                                        <input type="date" onChange={(e)=>setYears(e.target.value)} className="px-3 text-sm py-2 mt-2 outline-none border-gray-300 w-full resize-none border rounded-md placeholder:text-sm"/>  
                                    </div>
                                </div>
                            )
                        )}
                        <div className="mt-2 px-5 py-2">
                            <label>Chi tiết văn bản</label>
                            <textarea onChange={(e)=>setContent(e.target.value)} className="h-40 px-3 text-sm py-1 mt-2 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm"/>  
                        </div>
                        <div className="mt-2 px-5 py-2">
                            <label>Mã số báo hoặc volume</label>
                            <input onChange={(e)=>setVolume(e.target.value)} className="px-3 text-sm py-2 mt-2 outline-none border-gray-300 w-full resize-none border rounded-md placeholder:text-sm"/>  
                        </div>
                        {select!="tintucsukien"&&(
                            <div className="mt-2 px-5 py-2">
                                <label>Link bài báo khoc học</label>
                                <input onChange={(e)=>setLink(e.target.value)} className="px-3 text-sm py-2 mt-2 outline-none border-gray-300 w-full resize-none border rounded-md placeholder:text-sm"/>  
                            </div>
                        )}
                    </div>
                    <div className="px-5 py-5 flex flex-row items-end justify-end gap-3">
                        <button className="px-3 w-20 py-2 border border-gray-200 rounded-md hover:bg-[#ebeae9]">Hủy</button>
                        <button className="px-3 py-2 bg-[#e2e2e1] hover:bg-[#ebeae9] rounded-md w-32">Hoàn tất sau</button>
                        <button onClick={handleSubmit} className="px-3 py-2 bg-[#1d5cb0] w-20 rounded-md text-white hover:bg-[#1c71d8]">Đăng</button>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="mb-5">
                        <h3 className="font-semibold text-md">Xem trước trên trang webiste</h3>
                    </div>
                    <div className={`${select=="tintucsukien"?"w-2/4":"w-3/4"} h-3/4 bg-white px-5 py-5`}>
                        <div className="flex justify-start items-start">
                            <div className="border border-gray-200 w-full">
                                <div className="text-center border-t-2 border-[#183762] py-3">
                                    {DataPost.map((d:Data)=>{
                                        if(d.value == select){
                                            return(
                                                <h1 className="font-bold">{d.name}</h1>
                                            )
                                        }
                                    })}
                                    {!select&&<h1 className="font-bold">DEMO</h1>}
                                </div>
                            </div>
                        </div>
                        {(select==="tintucsukien")
                        ? <div className="flex items-center flex-col mt-5 w-full animate-pulse">
                            <div className="flex items-center flex-col w-full">
                                <div className="grid bg-gray-300 rounded-lg h-52 w-full place-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                    className="w-12 h-12 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z">
                                    </path>
                                    </svg>
                                </div>
                                <div className="text-xl text-wrap mt-2 w-full">
                                    <div className="w-full h-3 mt-1 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                                    <div className="w-4/5 h-3 mt-1 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                                </div>
                            </div>
                            <div className="mt-2 text-gray-600 w-full">
                                <div className="w-full h-3 mt-1 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                                <div className="w-4/5 h-3 mt-1 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                                <div className="w-3/4 h-3 mt-1 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                                <div className="w-2/3 h-3 mt-1 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                                <div className="w-1/2 h-3 mt-1 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                                <div className="w-1/3 h-3 mt-1 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
                            </div>
                        </div>
                        :(
                            writer&&(
                                <div className="mt-5 flex flex-col gap-3 text-base">
                                    <div className="flex flex-row">
                                        <strong className="mr-2">1.</strong>
                                        <div>
                                            <p>{writer}	&ensp;({years.slice(0,4)}).&ensp;{content}&ensp;{volume}</p>
                                            {link&& <p>{link}</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}