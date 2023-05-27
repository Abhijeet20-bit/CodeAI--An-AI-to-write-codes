const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan')
const connection = require('./database/connect');
const cookies = require("cookie-parser");
connection();
const app = express();
/** middlewares */
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true
  }));
app.use(morgan('tiny'));
app.use(cookies())
app.disable('x-powered-by');
app.use("/",require("./routes/RegistrationRoutes"))

app.use("/",require("./routes/LoginRoutes"))
app.use("/",require("./routes/SolutionRoutes"))
app.use("/",require("./routes/ChatGPTRoutes"))
app.use("/",require("./routes/RetrivalRoutes"))
app.use("/",require("./routes/TestRoutes"))
app.use("/",require("./routes/LogoutRoutes"))
app.use("/",require("./routes/StoreRoutes"))

const port = process.env.PORT||5000;

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});