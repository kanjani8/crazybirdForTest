const express = require("express");

const PORT = 4000;
const app = express();

const home = (req, res) => {
    return res.send("hello");
};

app.get("/", home);

const handleListening = () =>
    console.log(`Server listening - port:${PORT}🧭🏝`);

app.listen(PORT, handleListening);