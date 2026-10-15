import app from "./app/app.js"
import { createServer } from "node:http"
import { Server } from "socket.io"


const httpServer = createServer(app) //http server
const io = new Server(httpServer) //socketio server

io.on("connection", (socket) => {
  console.log("A user connected")
  console.log(socket.id)

  socket.on("disconnect", () => {
    console.log("A user disconnected")
  })
})

httpServer.listen(3000, () => {
  console.log("Server is runnin on port: 3000")
})