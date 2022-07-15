const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');


const app = express()
dotenv.config()

require("./db/connect") // Database Connection

// Request Parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Set View Engine
app.set("view engine", "ejs")

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")))

// Parse Cookie
app.use(cookieParser(process.env.COOKIE_SECRET))

// Routing Set up

// Error Handline

app.listen(process.env.PORT, () => {
    console.log(`App listening on PORT ${process.env.PORT}`);
})