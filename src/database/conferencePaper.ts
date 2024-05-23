import clientPromise from "./database"


let client;
let dbs:any;
let conferencePaper:any;

async function init(){
    if(dbs) return;
    try{
        client = await clientPromise;
        dbs = client.db("research-ttu");
        conferencePaper = dbs.collection('conferencePaper')
    }catch(error){
        //"Failed to stablish connection to database"
        throw new Error(error as string)
    }
}

(async()=>{
    await init()
})()


async function createConferencePaper(content : string,idx: string){
    try{
        if(!conferencePaper) await init();
        const rs = await conferencePaper.insertOne({
            content: content,
            idx: idx
        });
        return rs;
    }catch(error){
        return {error:"Failed to create conference paper!!",er:error}
    }
}


async function loadConferencePaper(){
    try{
        if(!conferencePaper) await init();
        const result = await conferencePaper.find({}).toArray();
        return result;
    }catch(error){
        return {error:"Failed to load conference paper!!",er:error}
    }
}

export{
    createConferencePaper,
    loadConferencePaper
}