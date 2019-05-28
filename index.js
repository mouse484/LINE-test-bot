const express = require("express");
const line = require("@line/bot-sdk");

const config = {
    channelAccessToken: process.env.TOKEN,
    channelSecret: process.env.CHANNEL,
};

const app = express();
const client = new line.Client(config);

console.log("開始");

app.post("/event", line.middleware(config), (req, res) => {
    const event = req.body.events[0];
    if (event.type !== "message") return
    client.replyMessage(event.replyToken, {
        type: "text",
        text: "ここに返すメッセージを入れる",
    });

    res.sendStatus(200);
});

app.listen(3000);
