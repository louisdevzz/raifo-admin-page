import { createConferencePaper, loadConferencePaper } from "@/database/conferencePaper";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if(req.method == "POST"){
        const {content,idx} = req.body;
        const result = await createConferencePaper(content,idx);
        res.status(200).json(result)
    }
    if(req.method == "GET"){
        const rs = await loadConferencePaper();
        res.status(200).json(rs)
    }
}