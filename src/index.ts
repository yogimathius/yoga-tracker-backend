import express from "express";
import seriesRouter from "./routes/series";
import sessionRouter from "./routes/session";
import progressRouter from "./routes/progress";

const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.use("/series", seriesRouter);
app.use("/sessions", sessionRouter);
app.use("/progress", progressRouter);

app.listen(port, () => {
  console.log(`Yoga tracker server running at http://localhost:${port}`);
});
