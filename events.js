const EventEmitter = require("events");
const http = require("http");

class Sale extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sale();

myEmitter.on("newSale", () => {
  console.log("There is a new sale going on.");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Mr. Baran");
});
myEmitter.on("newSale", (stock) => {
  console.log(`There are ${stock} left of this item.`);
});

myEmitter.emit("newSale", 8);

/////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received!");
});

server.on("request", (req, res) => {
  console.log("Another request 😀");
});

server.on("end", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
