// src/routes/session.ts
import { Router } from "express";
import prisma from "../utils/prisma";

const router = Router();

router.post("/", async (req, res) => {
  const { week, duration, progress } = req.body;

  try {
    const session = await prisma.session.create({
      data: {
        week,
        duration,
        progress,
        date: new Date(),
      },
    });

    return res.status(201).json({ message: "Session added", session });
  } catch (error) {
    return res.status(500).send({ error: "Failed to add session" });
  }
});

export default router;
