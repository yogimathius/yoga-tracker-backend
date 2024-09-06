// src/routes/session.ts
import { Router } from "express";
import prisma from "../utils/prisma";

const router = Router();

router.post("/", async (req, res) => {
  const { week, duration, progress } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { id: 1 },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (progress === 7) {
      const result = await prisma.user.update({
        where: { id: 1 },
        data: {
          currentWeek: user.currentWeek + 1,
          currentWeekProgress: 0,
          completedWeeks: user.completedWeeks + 1,
          sessions: {
            create: {
              week,
              duration,
              progress,
              date: new Date(),
            },
          },
        },
      });
      return res.json("Session added successfully");
    } else {
      const result = await prisma.user.update({
        where: { id: 1 },
        data: {
          currentWeekProgress: user.currentWeekProgress + 1,
          sessions: {
            create: {
              week,
              duration,
              progress,
              date: new Date(),
            },
          },
        },
      });

      return res.json("Session added successfully");
    }
  } catch (error) {
    return res.status(500).send({ error: "Failed to add session" });
  }
});

export default router;
