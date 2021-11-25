import "dotenv/config";
import "./db";
import "./models/subject";
import "./models/test";
import "./models/user";
import "./models/school";
import "./models/posting";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);