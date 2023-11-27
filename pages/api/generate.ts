import type { NextApiRequest, NextApiResponse } from "next";
// import { Configuration, OpenAIApi } from "openai";

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
    // dangerouslyAllowBrowser: true
});

type Data = {
    prompt?: string;
    sucess?: boolean,
    data?: string;
    error?: unknown;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { user_input } = req.body;
    try {
        // const response = await openai.createCompletion({
        const response:any = await fetch("https://symptoms-ai.onrender.com/api/gpt3-api/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(user_input)
            })
        res.status(200).json({
            sucess: true,
            data: response,
        });
    } catch (error) {
        if (error) {
            console.log(error)
        }
        res.status(400).json({
            sucess: false,
            error: "Failed to Translate"
        })
    }
}
