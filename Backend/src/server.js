import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth_route.js";
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);


app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
    connectDB();
});
