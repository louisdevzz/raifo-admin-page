import { createEventPost, loadEvent } from "@/database/event";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if(req.method == "POST"){
        const {title,image,content} = req.body;
        const result = await createEventPost(content,title,image);
        res.status(200).json(result)
    }
    if(req.method == "GET"){
        const rs = await loadEvent();
        res.status(200).json(rs)
    }
}