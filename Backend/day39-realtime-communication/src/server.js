import app from "./app/app.js"
import { createServer } from "node:http"
import { Server } from "socket.io"


const httpServer = createServer(app) //http server
const io = new Server(httpServer) //socketio server

httpServer.listen(3000, () => {
  console.log("Server is runnin on port: 3000")
})