import "dotenv/config";//.env처리
import "./db";
import "./models/subject";
import "./models/test";
import "./models/user";
import "./models/school";
import "./models/posting";
import "./models/reporting";
import "./models/location";
import "./models/event";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);