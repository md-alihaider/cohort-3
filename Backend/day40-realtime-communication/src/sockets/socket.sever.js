import { Server } from "socket.io";

// io means whole socket server
// socket means single user connection
export default function initializeSocket(httpServer) {
  const io = new Server(httpServer)
}
