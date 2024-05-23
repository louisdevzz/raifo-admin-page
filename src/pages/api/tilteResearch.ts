import { createTilteResearch, loadTitleResearch } from "@/database/titleResearch";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if(req.method == "POST"){
        const {idx,title,titleEN,writer,volume,sponorship} = req.body;
        const result = await createTilteResearch(idx,title,titleEN,writer,volume,sponorship)
        res.status(200).json(result)
    }
    if(req.method == "GET"){
        const rs = await loadTitleResearch();
        res.status(200).json(rs)
    }
}  