const express = require("express");
var cors = require("cors");
const port = 3001;

const usersRouter = require("./routers/person/index");

const app = express();

app.use(cors());
app.use("/usuarios", usersRouter);

app.get("/", (req, resp) => {
  resp.status(200).send("API ok");
});

app.listen(port, () => {
  console.log(`------ Servidor Rodando na Porta ${port} -------`);
});
