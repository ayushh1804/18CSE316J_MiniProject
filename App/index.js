import express from "express";
import router from "./routes/router.js";

const app = express();
const PORT = 3000;

app.use("/", router);

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT} 🎉`));

