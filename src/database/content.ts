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

// async function checkLogin(user : string,pass : string ){
//     try{
//         if(!users) await init();
//         const result = await users
//             .find({username:{$eq:user},password:{$eq:pass}})
//             .toArray()
//         return result;
//     }catch(error){
//         return {error:"Failed to check login"}
//     }
// }

async function createScientificArticle(writer : string ,years : string,content : string,volume : string,link_docs :  string){
    try{
        if(!contents) await init();
        const rs = await contents.insertOne({
            writer: writer,
            years: years,
            content: content,
            volume: volume,
            link: link_docs
        });
        return rs;
    }catch(error){
        return {error:"Failed to create scientific article!!",er:error}
    }
}

async function loadScientificArticle(){
    try{
        if(!contents) await init();
        const result = await contents.find().toArray();
        return result;
    }catch(error){
        return {error:"Failed to load scientific article!!",er:error}
    }
}

export{
    createScientificArticle,
    loadScientificArticle
}