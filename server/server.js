import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import dbConnection from "./config/db.js";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoute from "./Routes/AuthRoute.js";

// import aboutRoute from "./routes/aboutRoute.js";
// import workRoute from "./routes/workRoute.js";
// import skillRoute from "./routes/skillRoute.js";
// import experienceRoute from "./routes/experienceRoute.js";
// import testimonialRoute from "./routes/testimonialRoute.js";
// import brandRoute from "./routes/brandRoute.js";
// import contactRoute from "./routes/contactRoute.js";

const app = express();

dotenv.config();

dbConnection();

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use(morgan("devcd "));

// Serve static files from the "uploads" directory
// app.use("/uploads", express.static("uploads"));

// routes
app.use("/", authRoute);
// app.use("/api/about", aboutRoute);
// app.use("/api/work", workRoute);
// app.use("/api/skill", skillRoute);
// app.use("/api/experience", experienceRoute);
// app.use("/api/testimonial", testimonialRoute);
// app.use("/api/brand", brandRoute);
// app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`.bgYellow);
});
