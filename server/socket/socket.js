import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["https://chat-app-rust-theta-12.vercel.app"],
        methods: ["GET", "POST"]
    }
});

const userSocketMap = {};

io.on('connection', (socket) => {     
    const userId = socket.handshake.query.userId;
    if (userId !== "undefined" && userId) userSocketMap[userId] = socket.id;

    //io.emit() -> is used to send events to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    //socket.on() is used to listen to the events, can be used both on client and server side
    socket.on("disconnect", () => {
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});
export { app, io, server };