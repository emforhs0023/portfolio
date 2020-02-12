const express = require('express')
const path = require('path');
const fs = require('fs')
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const http = require("http").Server(app)

app.use(cors({
	origin: true,
	credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

// app.use(express.static(path.join(__dirname, 'public')));
app.use('/image', express.static('./upload'));


var mainRoute = require("./routes/mainRoute");
app.use("/", mainRoute);


http.listen(9008, "0.0.0.0", function(){
	console.log("server start 9008");
});
