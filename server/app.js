const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())

const conn = require("./db/conn")


const routes = require("./routes/router")
app.use("/api", routes)

conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))