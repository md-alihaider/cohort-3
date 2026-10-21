import app from "./app/app.js";
import { createServer } from "node:http";
import initializeSocket from "./sockets/socket.sever.js";

const httpServer = createServer(app); // socket io need http server in order to work
initializeSocket(httpServer); // socket server

httpServer.listen(3000, () => console.log("Server running on port 3000")); // whatever request is coming in http server, it will be handled by express
