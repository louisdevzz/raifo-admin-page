import { useEffect, useState } from "react";
import DropDown from "../DropDown/DropDown";
import axios from "axios";
import { uploadImage } from "@/hook/SDK";
import Tiptap from "../Editor/Tiptap";



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

const DataJOB = [
    {
        name:"Giáo viên",
        value:"teacher"
    },
    {
        name:"Sinh viên",
        value:"student"
    }
] 

export default function CreateContent(){
    const [select,setSelect] = useState('');
    const [job,setJOB] = useState('');
    const [image,setImage] = useState('');
    const [writer,setWriter] = useState('');
    const [years,setYears] = useState('');
    const [volume,setVolume] = useState('');
    const [content,setContent] = useState('');
    const [link,setLink] = useState('');
    const [sponsorship,setSponsorship] = useState('');
    const [title,setTitle] = useState('');
    const [titleEN,setTitleEN] = useState('');
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
    const handleCreateTitleSearch = async() =>{
        const ds =  await axios.get("/api/tilteResearch",{
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        });
        const data = ds.data;
        const result = await axios.post("/api/tilteResearch",{
            idx:`${Number(data.length)+1}`,
            title:title,
            titleEN: titleEN,
            writer: writer,
            volume: volume,
            sponorship: sponsorship,
            job: job,
        },{
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
        if(result){
            await axios.post("/api/historyPost",{
                title: content,
                time: Date.now(),
                placePost: "Đề tài nghiên cứu",
                status: "Đã đăng"
            },{
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            setIsCreate(true)
            setWriter('');
            setTitle('')
            setTitleEN('')
            setVolume('')
            setSponsorship('')
            setJOB('')
        }else{
            setIsCreate(false)
        }
    }
    const handleCreateConferencePaper = async()=>{
        const ds =  await axios.get("/api/conferencePaper",{
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        });
        const data = ds.data;
        const result = await axios.post("/api/conferencePaper",{
            idx:`${Number(data.length)+1}`,
            content: content
        },{
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
        if(result){
            await axios.post("/api/historyPost",{
                title: content,
                time: Date.now(),
                placePost: "Bài Báo Hội Thảo",
                status: "Đã đăng"
            },{
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            setIsCreate(true)
            setContent('')
        }else{
            setIsCreate(false)
        }
    }
    const handleCreateScientificArticle = async() =>{
        const ds =  await axios.get("/api/scientificArticle",{
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        });
        const data = ds.data;
        const result = await axios.post("/api/scientificArticle",{
            idx:`${Number(data.length)+1}`,
            content: content
        },{
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
        if(result){
            await axios.post("/api/historyPost",{
                title: content,
                time: Date.now(),
                placePost: "Bài Báo Khoa Học",
                status: "Đã đăng"
            },{
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            setIsCreate(true)
            setContent('')
        }else{
            setIsCreate(false)
        }
    }
    const handleSubmit = () =>{
        if(select=="baibaokhoahoc"){
            handleCreateScientificArticle()
        }else if(select=="baibaohoithao"){
            handleCreateConferencePaper()
        }else if(select=="detainghiencuu"){
            handleCreateTitleSearch()
        }
    }
    const handleUploadImage = (e:any) =>{
        uploadImage(e,setImage)
    }
    const handleSelect = (e:any) =>{
        setSelect(e.target.value)
        setYears('')
        setContent('')
        setVolume('')
        setWriter('');
        setTitle('')
        setTitleEN('')
        setSponsorship('')
        setImage('')
        setJOB('')
        setIsCreate(null)
    }
    const clear = ()=>{
        setYears('')
        setContent('')
        setVolume('')
        setWriter('');
        setTitle('')
        setTitleEN('')
        setSponsorship('')
        setImage('')
        setJOB('')
    }
    const handleJOB = (e:any)=>{
        setJOB(e.target.value)
    }
    console.log(content)
    return(
        <div className="h-[88vh] px-3">
            <h1 className="text-xl font-semibold">TẠO NỘI DUNG</h1>
            <div className="px-3 grid grid-cols-1 gap-5 md:grid-cols-2 py-2 mt-3 rounded-md h-[90vh]">
                <div className="bg-white md:w-full lg:w-3/4 flex flex-col justify-between h-[85vh] overflow-y-scroll">
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
                            <DropDown select={select} setSelect={handleSelect} options={"mt-2"} data={DataPost}/>
                        </div>
                        
                        {select=="tintucsukien"&&(
                            <div className="mt-2 px-5 py-2">
                                <label>Hình Ảnh</label>
                                {image?(
                                    <div>
                                        <div className="max-h-60 mt-3 flex justify-center w-full">
                                            <img src={image} width={350}/>
                                        </div>
                                        <div className="w-full">
                                        <input type="file" name="file-input" id="file-input" onChange={handleUploadImage} className="block mt-3 w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                                            file:bg-gray-50 file:border-0
                                            file:me-4
                                            file:py-3 file:px-4
                                            dark:file:bg-neutral-700 dark:file:text-neutral-400"/>
                                        </div>
                                    </div>
                                )
                                :(
                                    <div className="grid grid-cols-1 space-y-2 mt-3">
                                    <div className="flex items-center justify-center w-full">
                                        <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                            <div className="h-full w-full text-center flex flex-col justify-center items-center  ">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                                <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                                <img className="has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image"/>
                                                </div>
                                                <p className="pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a className="text-blue-600 hover:underline">select a file</a> from your computer</p>
                                            </div>
                                            <input type="file" className="hidden" onChange={handleUploadImage}/>
                                        </label>
                                    </div>
                                </div>
                                )}
                            </div>
                        )}
                        {select=="detainghiencuu"&&(
                            <div className="mt-2 px-5 py-2">
                                <label>Đề tài</label>
                                <DropDown select={job} setSelect={handleJOB} options={"mt-2"} data={DataJOB}/>
                            </div>
                        )}
                        {select=="tintucsukien"||select=="detainghiencuu"?(
                            <div className="mt-2 px-5 py-2">
                                <label>Tiêu đề</label>
                                <textarea value={title} onChange={(e)=>setTitle(e.target.value)} className="h-20 px-3 text-sm py-1 mt-2 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm"/>  
                            </div>
                        ):''}
                        {select=="detainghiencuu"&&(
                            <div className="mt-2 px-5 py-2">
                                <label>Tiêu đề tiếng anh</label>
                                <textarea value={titleEN} onChange={(e)=>setTitleEN(e.target.value)} className="h-20 px-3 text-sm py-1 mt-2 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm"/>  
                            </div>
                        )}
                        {select=="detainghiencuu"?(
                            <div className="mt-2 px-5 py-2">
                                <label>Người tham gia</label>
                                <input value={writer} onChange={(e)=>setWriter(e.target.value)} className="px-3 text-sm py-2 mt-2 outline-none border-gray-300 w-full resize-none border rounded-md placeholder:text-sm"/>  
                            </div>
                        ):(
                            <div className="mt-2 px-5 py-2">
                                <label>Chi tiết văn bản</label>
                                <Tiptap content={content} onChange={(newContent:string)=>setContent(newContent)}/> 
                            </div>
                        )}
                        {select=="detainghiencuu"?(
                            <div>
                                    <div className="mt-2 px-5 py-2">
                                        <label>Chương trình tài trợ</label>
                                        <input value={sponsorship} onChange={(e)=>setSponsorship(e.target.value)} className="px-3 text-sm py-2 mt-2 outline-none border-gray-300 w-full resize-none border rounded-md placeholder:text-sm"/>  
                                    </div>
                                    <div className="mt-2 px-5 py-2">
                                        <label>Mã số  hoặc volume</label>
                                        <input value={volume} onChange={(e)=>setVolume(e.target.value)} className="px-3 text-sm py-2 mt-2 outline-none border-gray-300 w-full resize-none border rounded-md placeholder:text-sm"/>  
                                    </div>
                            </div>
                        ):''}
                    </div>
                    <div className="px-5 py-5 flex flex-row items-end justify-end gap-3">
                        <button onClick={clear} className="px-3 w-20 py-2 border border-gray-200 rounded-md hover:bg-[#ebeae9]">Hủy</button>
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
                        ? image?(
                            <div className="mt-5">
                                <div className="flex items-center flex-col w-full">
                                    <div className="grid bg-gray-300 h-52 w-full place-items-center">
                                        <img src={image}/>
                                    </div>
                                    <div className="text-xl text-wrap mt-2 w-full">
                                        <div className="text-lg font-medium">{formatString(title)}</div>
                                    </div>
                                </div>
                                <div className="mt-2 text-gray-600 w-full">
                                    <small>{formatStringDescription(content)}</small>
                                </div>
                            </div>
                        ):(
                            <div className="flex items-center flex-col mt-5 w-full animate-pulse">
                                <div className="flex items-center flex-col w-full">
                                    <div className="grid bg-gray-300 rounded-lg h-52 w-full place-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                        className="w-12 h-12 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round"
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
                        )
                        :(
                            select!="detainghiencuu"?(
                                content&&(
                                    <div className="mt-5 flex flex-col gap-3 text-base">
                                        <div className="flex flex-row">
                                            <strong className="mr-2">1.</strong>
                                            <div className="text-justify" dangerouslySetInnerHTML={{__html:content}}/>
                                        </div>
                                    </div>
                                )
                            ):(
                                title&&(
                                    <div className="mt-5 flex flex-col gap-3">
                                        <div className="flex flex-row">
                                            <strong className="mr-2">1.</strong>
                                            <p>{title}</p>
                                        </div>
                                        <p className="mt-3">({titleEN})</p>
                                        <div className="mt-3">
                                            <div className="flex flex-row">
                                                <strong className="mr-2">Mã số: </strong>
                                                <p>{volume}</p>
                                            </div>
                                            <div className="flex flex-row">
                                                <strong className="mr-2">Người tham gia: </strong>
                                                <p>{writer}</p>
                                            </div>
                                            <div className="flex flex-row">
                                                <strong className="mr-2">Chương trình tài trợ: </strong>
                                                <p>{sponsorship}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}