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
    },
    {
        name:"Chương trình họp tác quốc tế",
        value:"cthoptacquocte"
    },
    {
        name:"Mạng lưới quốc tế",
        value:"mlquocte"
    },
    {
        name:"Dự án quốc tế",
        value:"duanquocte"
    },
    {
        name:"Điều kiện sinh viên",
        value:"dieukiensinhvien"
    },
    {
        name:"Các trường đối tác",
        value:"doitac"
    },
    {
        name:"Sinh viên quốc tế",
        value:"sinhvienquocte"
    },
    {
        name:"Văn bản biểu mẫu",
        value:"bieumau"
    },
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

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

export{
    DataPost,
    DataJOB,
    type Data,
    modules,
    formats
}