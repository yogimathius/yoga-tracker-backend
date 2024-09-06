// src/routes/series.ts
import { Router } from "express";
import prisma from "../utils/prisma";

const router = Router();

router.get("/:week", async (req, res) => {
  const week = parseInt(req.params.week, 10);
  try {
    const series = await prisma.series.findUnique({
      where: { week },
      include: { postures: true },
    });

    if (!series) {
      return res.status(404).send({ error: "Series not found" });
    }

    return res.json(series);
  } catch (error) {
    return res.status(500).send({ error: "Failed to fetch series" });
  }
});

export default router;
