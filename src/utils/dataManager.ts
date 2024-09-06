import { Series, Session, Progress } from "./types";

let seriesData: Series[] = [
  {
    id: 1,
    week: 1,
    title: "Sun Salutation",
    description: "A foundational series to warm up the body",
    postures: [
      { id: 1, name: "Mountain Pose", duration: 30, sequenceOrder: 1 },
      { id: 2, name: "Downward Dog", duration: 45, sequenceOrder: 2 },
    ],
  },
];

let sessionData: Session[] = [];
let progressData: Progress = {
  totalWeeks: 300,
  completedWeeks: 0,
  currentWeek: 1,
  weeklyProgress: 0,
};

// Fetch a specific series by week number
export const getSeriesByWeek = (week: number): Series | null => {
  return seriesData.find((series) => series.week === week) || null;
};

// Add a session for a specific week
export const addSession = (session: Session): void => {
  sessionData.push(session);
  const progress = sessionData.filter((s) => s.week === session.week).length;
  progressData.weeklyProgress = progress / 100; // Assuming 100% progress equals full completion
  progressData.completedWeeks++;
  progressData.currentWeek = session.week + 1;
};

// Get overall progress
export const getProgress = (): Progress => {
  return progressData;
};
