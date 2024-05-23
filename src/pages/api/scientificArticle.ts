import { createScientificArticle, loadScientificArticle } from "@/database/scientificArticle";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if(req.method == "POST"){
        const {content,idx} = req.body;
        const result = await createScientificArticle(content,idx);
        res.status(200).json(result)
    }
    if(req.method == "GET"){
        const rs = await loadScientificArticle();
        res.status(200).json(rs)
    }
}