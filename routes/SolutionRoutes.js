
const express = require("express");
const router=express.Router();
const Authenticate = require('../middleware/Authenticate')
const jwt = require('jsonwebtoken');
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");

router.use(Authenticate);
router.route("/Respond").post(async (req,res) => {
    //console.log("Inside Respond",req.cookies);
    /*return res.status(200).json({
        "Bot-Response": "Successful"
    });*/
    try{
        const configuration = new Configuration({
            apiKey: process.env.OPEN_AI_KEY,
        });
          
        const openai = new OpenAIApi(configuration);

        const prompt = req.body.Question;

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0, // Higher values means the model will take more risks.
            max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
            top_p: 1, // alternative to sampling with temperature, called nucleus sampling
            frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
            presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
        });

        return res.status(200).json({
            "BotResponse": response.data.choices[0].text
        });

    }catch (err) {
        console.log(err);
        return res.status(404).json("Some Error Occured");
    }
});

module.exports = router;