import { createConferencePaper, createScientificArticle, createTilteResearch, loadScientificArticle } from "@/database/content";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method == "POST"){
    const {type,writer,years,volume,content,link} = req.body;
    let result;
    if(type=="baibaokhoahoc"){
      result = await createScientificArticle(writer,years,content,volume,link);
    }else if(type=="baibaohoithao"){
      result = await createConferencePaper(writer,years,content,volume,link);
    }else if(type=="detainghiencuu"){
      const {title,titleEN,writer,volume,sponorship} = req.body;
      result = await createTilteResearch(title,titleEN,writer,volume,sponorship)
    }
    res.status(200).json(result)
  }
}
