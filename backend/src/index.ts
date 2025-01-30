import express from "express";
import logger from "morgan";
import { lobyRouter } from "./loby/index.js";
import { Server } from "socket.io";
import { createServer } from "node:http";
import cors from "cors";
import { socketServer } from "./presentation/socketServer.js";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(logger("dev"));
app.use(
  cors({
    origin: process.env.CORS,
  })
);
app.get("/api/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/loby", lobyRouter);

const server = createServer(app);
const io = new Server(server, {
  path: "/api/socket.io/",
  cors: {
    origin: process.env.CORS,
  },
  connectionStateRecovery: {
    maxDisconnectionDuration: 5000,
  },
});

socketServer(io);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Express server is listening at http://localhost:${PORT}`);
});
