import clientPromise from "./database"


let client;
let dbs:any;
let contents:any;

async function init(){
    if(dbs) return;
    try{
        client = await clientPromise;
        dbs = client.db("research-ttu");
        contents = dbs.collection('content')
    }catch(error){
        //"Failed to stablish connection to database"
        throw new Error(error as string)
    }
}

(async()=>{
    await init()
})()

async function createScientificArticle(content : string){
    try{
        if(!contents) await init();
        const rs = await contents.insertOne({
            type:"baibaokhoahoc",
            content: content
        });
        return rs;
    }catch(error){
        return {error:"Failed to create scientific article!!",er:error}
    }
}

async function createConferencePaper(writer : string ,years : string,content : string,volume : string,link_docs :  string){
    try{
        if(!contents) await init();
        const rs = await contents.insertOne({
            type:"baibaohoithao",
            writer: writer,
            years: years,
            content: content,
            volume: volume,
            link: link_docs
        });
        return rs;
    }catch(error){
        return {error:"Failed to create conference paper!!",er:error}
    }
}

async function createTilteResearch(title: string, titleEN: string,writer : string ,volume : string,sponorship :  string){
    try{
        if(!contents) await init();
        const rs = await contents.insertOne({
            type:"detainghiencuu",
            title: title,
            titleEN: titleEN,
            writer: writer,
            volume: volume,
            sponorship: sponorship
        });
        return rs;
    }catch(error){
        return {error:"Failed to create title research article!!",er:error}
    }
}

async function loadScientificArticle(){
    try{
        if(!contents) await init();
        const result = await contents.find({type:{$eq:"baibaokhoahoc"}}).toArray();
        return result;
    }catch(error){
        return {error:"Failed to load scientific article!!",er:error}
    }
}
async function loadConferencePaper(){
    try{
        if(!contents) await init();
        const result = await contents.find({type:{$eq:"baibaohoithao"}}).toArray();
        return result;
    }catch(error){
        return {error:"Failed to load scientific article!!",er:error}
    }
}

export{
    createScientificArticle,
    loadScientificArticle,
    createConferencePaper,
    loadConferencePaper,
    createTilteResearch
}