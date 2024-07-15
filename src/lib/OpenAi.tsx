import axios from 'axios';
import React from 'react'

export const OpenAi = async(messages:any) => {

    const apiKey = import.meta.env.VITE_REACT_AI_API_KEY;
    const reqData = { "model": "gpt-3.5-turbo-0125",messages};

    const res = await axios.post("https://api.openai.com/v1/chat/completions",
        reqData,{
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}` 
        }
    })

    return res.data.choices[0].message.content;
}
