import { Router } from "express";
import { getSeriesByWeek } from "../utils/dataManager";
import { Series } from "../utils/types";

const router = Router();

router.get("/:week", (req, res) => {
  const week = parseInt(req.params.week, 10);
  const series: Series | null = getSeriesByWeek(week);

  if (!series) {
    return res.status(404).send({ error: "Series not found" });
  }

  return res.json(series);
});

export default router;
