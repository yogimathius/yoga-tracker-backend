import express from "express";
import seriesRouter from "./routes/series";
import sessionRouter from "./routes/session";
import progressRouter from "./routes/progress";
import usersRouter from "./routes/users"; // Import the new users route

const app = express();
const port = 3000;

app.use(express.json());

// Register routes
app.use("/series", seriesRouter);
app.use("/sessions", sessionRouter);
app.use("/progress", progressRouter);
app.use("/users", usersRouter); // Register the users route

app.listen(port, () => {
  console.log(`Yoga tracker server running at http://localhost:${port}`);
});
