import { Router } from "express";
import { getProgress } from "../utils/dataManager";
import { Progress } from "../utils/types";

const router = Router();

router.get("/", (req, res) => {
  const progress: Progress = getProgress();
  return res.json(progress);
});

export default router;
