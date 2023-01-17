import express from "express"
import morgan from "morgan";
// Routes
import languageRoutes from "./routers/language.routers";

const app = express();

// Settings
app.set("port", 3000);

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/languages", languageRoutes);

export default app;