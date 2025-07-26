const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { PORT } = require("./config/serverConfig");
const cors = require("cors");
const startServer = () => {
    const app = express();


    app.use(cors());

    // app.get("/", (req, res) => {
    //     res.send("hello world")
    // })

    const server = http.createServer(express);

    const io = new Server(server, {
        cors: {
            origin: "*",
            method:["GET","POST"]
        }
    })

    io.on("connection", (socket) => {
        console.log("new user connected");
        socket.on("disconnect", () => {
            console.log("user disconnect");
        })
    })


    app.listen(PORT, () => {
        console.log(`server started at port ${PORT}`)
    })
};

startServer();