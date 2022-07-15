const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const loginRouter = require("./router/loginRouter")

// Internal Imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHander");

const app = express();
dotenv.config();

// Database Connection
require("./db/connect");

// Request Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set View Engine
app.set("view engine", "ejs");

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Parse Cookie
app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing Set up
app.use('/', loginRouter)
// app.use('/users', usersRouter)
// app.use('/inbox', inboxRouter)

// 404 Not Found Handler
app.use(notFoundHandler)

// Error Handling
app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`App listening on PORT ${process.env.PORT}`);
});
