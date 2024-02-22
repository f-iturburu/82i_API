import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "./config.js";
import "./dbConnection.js";
import ProductRoutes from "./routes/product.Routes.js";
import UserRoutes from "./routes/user.Routes.js";
import path from "path";
import { fileURLToPath } from "url";



const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use(ProductRoutes);
app.use(UserRoutes)

app.listen(PORT, async () => {
  console.log(`La app esta escuchando el puerto ${PORT}`);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../public")));