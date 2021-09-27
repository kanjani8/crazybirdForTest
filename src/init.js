import "dotenv/config";
import "./db";
import "./models/test";
import "./models/subject";
import "./models/user"
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);