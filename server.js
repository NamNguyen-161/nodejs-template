const app = require("./src/app");

const PORT = 4200;

const server = app.listen(PORT, () => {
  console.log(`Server start with port: ${PORT}`);
});

// process.env("SIGINT", () => {
//   server.close(() => console.log("Close server"));
// });
