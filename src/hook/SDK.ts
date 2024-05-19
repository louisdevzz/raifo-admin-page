const uploadImage = (e:any,setImage:any) =>{
    const render = new FileReader();
    render.readAsDataURL(e.target.files[0])
    render.onload = () =>{
        setImage(render.result)
    }
    render.onerror = error =>{
        console.log(error)
    }
}
export{
    uploadImage
}