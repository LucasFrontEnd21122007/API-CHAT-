const express = require('express');
const app = express()
app.listen(40003)
app.get('/', (req,res) =>{
    res.send("Oi");
})
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "YOUR_ORG_ID",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();