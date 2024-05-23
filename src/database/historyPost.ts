import clientPromise from "./database"


let client;
let dbs:any;
let history:any;

async function init(){
    if(dbs) return;
    try{
        client = await clientPromise;
        dbs = client.db("research-ttu");
        history = dbs.collection('historyPost')
    }catch(error){
        //"Failed to stablish connection to database"
        throw new Error(error as string)
    }
}

(async()=>{
    await init()
})()


async function createHistoryPost(placePost:string,time:string,status:string,title:string){
    try{
        if(!history) await init();
        const rs = await history.insertOne({
            title: title,
            time: time,
            placePost: placePost,
            status: status
        });
        return rs;
    }catch(error){
        return {error:"Failed to create history post!!",er:error}
    }
}


async function loadHistoryPost(){
    try{
        if(!history) await init();
        const result = await history.find({}).toArray();
        return result;
    }catch(error){
        return {error:"Failed to load history post!!",er:error}
    }
}

export{
    createHistoryPost,
    loadHistoryPost
}