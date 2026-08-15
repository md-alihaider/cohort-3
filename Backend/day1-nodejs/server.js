let http = require("http")


let server = http.createServer((req, res) => {
  console.log("Hello i am from Server")
  res.end("I am server and its working fine")
})

server.listen(3000, () => {
  console.log("Server is running on port: 3000..")
})