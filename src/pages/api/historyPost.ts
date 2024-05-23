import { createHistoryPost, loadHistoryPost } from "@/database/historyPost";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if(req.method == "POST"){
        const {placePost,time,status,title} = req.body;
        const result = await createHistoryPost(placePost,time,status,title);
        res.status(200).json(result)
    }
    if(req.method == "GET"){
        const rs = await loadHistoryPost();
        res.status(200).json(rs)
    }
}