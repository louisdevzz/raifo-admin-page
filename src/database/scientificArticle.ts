import clientPromise from "./database"


let client;
let dbs:any;
let scientificArticle:any;

async function init(){
    if(dbs) return;
    try{
        client = await clientPromise;
        dbs = client.db("research-ttu");
        scientificArticle = dbs.collection('scientificArticle')
    }catch(error){
        //"Failed to stablish connection to database"
        throw new Error(error as string)
    }
}

(async()=>{
    await init()
})()

async function createScientificArticle(content : string,idx: string){
    try{
        if(!scientificArticle) await init();
        const rs = await scientificArticle.insertOne({
            content: content,
            idx: idx
        });
        return rs;
    }catch(error){
        return {error:"Failed to create scientific article!!",er:error}
    }
}


async function loadScientificArticle(){
    try{
        if(!scientificArticle) await init();
        const result = await scientificArticle.find({}).toArray();
        return result;
    }catch(error){
        return {error:"Failed to load scientific article!!",er:error}
    }
}


export{
    createScientificArticle,
    loadScientificArticle,
}