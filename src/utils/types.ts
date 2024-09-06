export interface Posture {
  id: number; // Unique ID for each posture
  name: string; // Name of the posture (e.g., "Mountain Pose")
  duration: number; // Duration in seconds
  sequenceOrder: number; // Order in the series (e.g., 1st, 2nd)
}

export interface Series {
  id: number; // Unique ID for the series
  week: number; // The week number in the 300-week program
  title: string; // Title of the series (e.g., "Sun Salutation")
  description: string; // Description of the series
  postures: Posture[]; // Array of postures for this series
}

export interface Session {
  id: number; // Unique ID for the session
  week: number; // The week number for the session
  date: Date; // Date when the session took place
  duration: number; // Total duration of the practice (in minutes)
  progress: number; // Progress percentage for the week (e.g., 0.75 for 75% complete)
}

export interface Progress {
  totalWeeks: number; // Total number of weeks (e.g., 300)
  completedWeeks: number; // Number of weeks completed so far
  currentWeek: number; // Current week the user is on
  weeklyProgress: number; // Progress in the current week (percentage)
}

export interface User {
  id: number; // Unique ID for the user
  name: string; // User's name
  email: string; // User's email
  sessions: Session[]; // Array of sessions the user has completed
  progress: Progress; // User's overall progress
}
