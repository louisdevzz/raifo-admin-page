import clientPromise from "./database"


let client;
let dbs:any;
let form:any;

async function init(){
    if(dbs) return;
    try{
        client = await clientPromise;
        dbs = client.db("research-ttu");
        form = dbs.collection('form')
    }catch(error){
        //"Failed to stablish connection to database"
        throw new Error(error as string)
    }
}

(async()=>{
    await init()
})()


async function createForm(idx: string,title: string,category: string ,file: any){
    try{
        if(!form) await init();
        if(!file) throw Error;
        
        const rs = await form.insertOne({
            idx: idx,
            title: title,
            category: category,
            file: file
        });
        return rs;
    }catch(error){
        return {error:"Failed to create form!!",er:error}
    }
}


async function loadForm(){
    try{
        if(!form) await init();
        const result = await form.find({}).toArray();
        return result;
    }catch(error){
        return {error:"Failed to load form!!",er:error}
    }
}

export{
    createForm,
    loadForm
}