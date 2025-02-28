import express from "express";
import logger from "morgan";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/users.routes.js";
import messagesRoutes from "./routes/messages.routes.js";
import { connectDB } from "./db/connect.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";


dotenv.config();

const port = process.env.PORT || 5000;


// Middleware
app.use(logger("dev"));
app.use(express.json()); // To parse incoming requests with JSON payloads (from req.body)
app.use(cookieParser());


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/users", userRoutes);

server.listen(port, () => { 
  connectDB();
  console.log(`http://localhost:${port}`);
});
