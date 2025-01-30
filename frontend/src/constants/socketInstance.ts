import { io } from "socket.io-client";

const socket = io("wss://project.danielsaynov.com", {
  path: "/api/socket.io/", // ✅ Fix: Ensure WebSockets go to /api/socket.io/
  transports: ["websocket"], // ✅ Use WebSockets instead of polling
  withCredentials: true, // ✅ Keep session handling
});

export { socket };
