import { createScientificArticle, loadScientificArticle } from "@/database/content";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method == "POST"){
    const {writer,years,volume,content,link} = req.body;
    const result = await createScientificArticle(writer,years,content,volume,link);
    res.status(200).json(result)
  }
  if(req.method == "GET"){
    const result = await loadScientificArticle();
    res.status(200).json(result);
  }
}
