import { io } from "socket.io-client";

const socket = io("wss://project.danielsaynov.com", {
  path: "/api/socket.io/",
  transports: ["websocket"],
  withCredentials: true,
});

export { socket };
