const express = require("express");
const line = require("@line/bot-sdk");

const config = {
    channelAccessToken: process.env.TOKEN,
    channelSecret: process.env.CHANNEL,
};

const app = express();

console.log("開始");

app.post("/webhook", line.middleware(config), (req, res, next) => {
    res.sendStatus(200);
    console.log(req.body);
});

app.listen(3000);
