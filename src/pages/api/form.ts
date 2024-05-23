import { createForm, loadForm } from "@/database/form";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if(req.method == "POST"){
        const {idx,title,category,file} = await req.body;
        console.log(file)
        const result = await createForm(idx,title,category,file);
        res.status(200).json(result)
    }
    if(req.method == "GET"){
        const rs = await loadForm();
        res.status(200).json(rs)
    }
}