import { Server } from "socket.io";

// io means whole socket server
// socket means single user connection
// socket.id changes every time a new user connects or new connection is made

// emit = event fire karna
// on = event listen karna
// broadcast = broadcast karna means send to all users except the user who broadcasted the message
export default function initializeSocket(httpServer) {
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log("User connected", socket.id);

    socket.on("eleven", (msg) => {
      console.log(msg);
      socket.broadcast.emit("twelve", "Hello from server via socket");
    });

    socket.on("disconnect", () => {
      console.log("User disconnected", socket.id);
    });
  });
}
