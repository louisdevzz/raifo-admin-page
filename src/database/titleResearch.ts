import clientPromise from "./database"


let client;
let dbs:any;
let research:any;

async function init(){
    if(dbs) return;
    try{
        client = await clientPromise;
        dbs = client.db("research-ttu");
        research = dbs.collection('research')
    }catch(error){
        //"Failed to stablish connection to database"
        throw new Error(error as string)
    }
}

(async()=>{
    await init()
})()


async function createTilteResearch(idx: string,title: string, titleEN: string,writer : string ,volume : string,sponorship :  string){
    try{
        if(!research) await init();
        const rs = await research.insertOne({
            idx: idx,
            title: title,
            titleEN: titleEN,
            writer: writer,
            volume: volume,
            sponorship: sponorship
        });
        return rs;
    }catch(error){
        return {error:"Failed to create title research !!",er:error}
    }
}

async function loadTitleResearch(){
    try{
        if(!research) await init();
        const result = await research.find({}).toArray();
        return result;
    }catch(error){
        return {error:"Failed to load title research!!",er:error}
    }
}

export{
    createTilteResearch,
    loadTitleResearch
}