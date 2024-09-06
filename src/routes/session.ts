import { Router } from "express";
import { addSession } from "../utils/dataManager";
import { Session } from "../utils/types";

const router = Router();

router.post("/", (req, res) => {
  const { week, duration, progress }: Session = req.body;

  const newSession: Session = {
    id: Math.floor(Math.random() * 1000),
    week,
    duration,
    progress,
    date: new Date(),
  };

  addSession(newSession);

  return res
    .status(201)
    .json({ message: "Session added", session: newSession });
});

export default router;
