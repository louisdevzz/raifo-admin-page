import { useEffect, useState } from "react";
import DropDown from "../DropDown/DropDown";
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { uploadImage } from "@/hook/SDK";
import { DataJOB, DataPost, type Data,formats,modules } from "@/lib/config";
import Sidebar from "../Layout";




export default function CreateContent(){
    const [select,setSelect] = useState('');
    const [job,setJOB] = useState('');
    const [image,setImage] = useState('');
    const [file,setFile] = useState<File>();
    const [category,setCategory] = useState('');
    const [writer,setWriter] = useState('');
    const [years,setYears] = useState('');
    const [volume,setVolume] = useState('');
    const [content,setContent] = useState('');
    const [link,setLink] = useState('');
    const [sponsorship,setSponsorship] = useState('');
    const [title,setTitle] = useState('');
    const [titleEN,setTitleEN] = useState('');
    const [isCreate, setIsCreate] = useState<any>(null);
    const [isShow,setIsShow] = useState<boolean>(true);


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

    const handlePost = async() =>{
        const result = await axios.post("/api/events",{
            image:image,
            content: content,
            title:title
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
                placePost: "Tin tức - Sự kiện",
                status: "Đã đăng"
            },{
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            setIsCreate(true)
            setTitle('')
            setContent('')
        }else{
            setIsCreate(false)
        }
    }

    const handleForm = async() =>{
        const ds =  await axios.get("/api/form",{
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        });
        const dt = ds.data;
        try{
            const bytes = file?.stream();
            const result = await axios.post("/api/form",{
                idx:`${Number(dt.length)+1}`,
                title:title,
                category:category,
                file:bytes
            })
            if(result){
                await axios.post("/api/historyPost",{
                    title: title,
                    time: Date.now(),
                    placePost: "Văn bản - Biểu mẫu",
                    status: "Đã đăng"
                },{
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                })
                setIsCreate(true)
                setTitle('')
                setContent('')
            }else{
                setIsCreate(false)
            }
        }catch(error){
            console.log(error)
        }
    }


    const handleSubmit = () =>{
        if(select=="baibaokhoahoc"){
            handleCreateScientificArticle()
        }else if(select=="baibaohoithao"){
            handleCreateConferencePaper()
        }else if(select=="detainghiencuu"){
            handleCreateTitleSearch()
        }else if(select=="tintucsukien"){
            handlePost()
        }else if(select == "bieumau"){
            handleForm()
        }
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
        location.replace("/content")
    }
    const handleJOB = (e:any)=>{
        setJOB(e.target.value)
    }
    const handleUploadImage = (e:any)=>{
        uploadImage(e,setImage)
    } 
    return(
        <div className="flex flex-row gap-3 w-full">
            <Sidebar isShow={isShow}/>
            <div  className={`px-3 py-2 ${isShow?"ml-12 w-full":"w-full"}`}>
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
                <h1 className="text-xl font-semibold ml-5">TẠO NỘI DUNG</h1>
                <div className="px-3 grid grid-cols-1 gap-5 md:grid-cols-2 py-2 mt-3 rounded-md h-full min-h-[80vh]">
                    <div className="bg-[#eeeeee74] rounded-lg md:w-full lg:w-3/4 flex flex-col justify-between overflow-y-scroll">
                        <div className="">
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
                            
                            {select=="detainghiencuu"&&(
                                <div className="mt-2 px-5 py-2">
                                    <label>Đề tài</label>
                                    <DropDown select={job} setSelect={handleJOB} options={"mt-2"} data={DataJOB}/>
                                </div>
                            )}
                            {select=="tintucsukien"&&(
                                <div className="px-5 mt-2">
                                    <label htmlFor="">Hình ảnh (Thumbnail)</label>
                                    <input type="file" name="file-input" id="file-input" onChange={handleUploadImage} className="block mt-3 w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                                    file:bg-gray-50 file:border-0
                                    file:me-4
                                    file:py-3 file:px-4
                                    "/>
                                </div>
                            )}
                            {select=="detainghiencuu"||select=="tintucsukien"||select=="bieumau"?(
                                <div className="mt-2 px-5 py-2">
                                    <label>Tiêu đề</label>
                                    <textarea value={title} onChange={(e)=>setTitle(e.target.value)} className="h-20 px-3 text-sm py-1 mt-2 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm"/>  
                                </div>
                            ):''}
                            {select=="detainghiencuu"?(
                                <div className="mt-2 px-5 py-2">
                                    <label>Tiêu đề tiếng anh</label>
                                    <textarea value={titleEN} onChange={(e)=>setTitleEN(e.target.value)} className="h-20 px-3 text-sm py-1 mt-2 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm"/>  
                                </div>
                            ):(
                                select&&select=="bieumau"&&(
                                    <div className="mt-2 px-5 py-2">
                                        <label>Danh mục</label>
                                        <textarea value={category} onChange={(e)=>setCategory(e.target.value)} className="h-20 px-3 text-sm py-1 mt-2 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm"/>  
                                    </div>
                                )
                            )}
                            {select=="detainghiencuu"?(
                                <div className="mt-2 px-5 py-2">
                                    <label>Người tham gia</label>
                                    <input value={writer} onChange={(e)=>setWriter(e.target.value)} className="px-3 text-sm py-2 mt-2 outline-none border-gray-300 w-full resize-none border rounded-md placeholder:text-sm"/>  
                                </div>
                            ):(
                                select&&select!="bieumau"?(
                                    <div className="px-5 py-2">
                                        <label>Chi tiết văn bản</label>
                                        <div className="mt-2">
                                            <ReactQuill theme="snow" className="max-h-[35vh]" value={content} onChange={(newcontent)=>setContent(newcontent)} modules={modules} formats={formats} />
                                        </div>
                                    </div>
                                ):(
                                    select&&(
                                        <div className="px-5 mt-2">
                                            <label>File đính kèm</label>
                                            <input type="file" name="file-input" onChange={(e)=>setFile(e.target.files?.[0])} id="file-input" className="block mt-3 w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                                            file:bg-gray-50 file:border-0
                                            file:me-4
                                            file:py-3 file:px-4
                                            dark:file:bg-neutral-700 dark:file:text-neutral-400"/>
                                        </div>
                                    )
                                )
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
                        <div className={`${select=="tintucsukien"?"w-11/12 h-[80vh]":"w-3/4 h-3/4"} bg-[#eeeeee74] px-5 py-5 overflow-y-auto`}>
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
                            ? content?(
                                <div className="mt-5">
                                    <div dangerouslySetInnerHTML={{__html:content}}/>
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
                                                {/* <h2>{title}</h2> */}
                                                <div className="text-justify" dangerouslySetInnerHTML={{__html:title+content}}/>
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
        </div>
    )
}