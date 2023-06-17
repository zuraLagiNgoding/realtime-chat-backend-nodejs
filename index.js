const express = require('express')
const cors = require('cors')
const Pusher = require("pusher");
const { path } = require('express/lib/application');

const pusher = new Pusher({
  appId: "1620476",
  key: "cec3f156705b846b513e",
  secret: "8975685cbeb201c1f2d3",
  cluster: "ap1",
  useTLS: true
});

const app = express();

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.post('api/messages', async (req, res) => {
    await pusher.trigger("chat", "messages", {
        username: req.body.username,
        message: req.body.message
    });
    
    res.json([]);
})

app.use(express.json())

console.log('listening to port 3000');
app.listen(3000)