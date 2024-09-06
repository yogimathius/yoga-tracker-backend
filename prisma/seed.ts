// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Week 1 and 2 - Foundation and Strength Building
  await prisma.series.create({
    data: {
      week: 1,
      title: "Week 1 - Foundation and Strength Building",
      description:
        "Establish a foundational routine focusing on building strength.",
      postures: {
        create: [
          { name: "Tadasana (Mountain Pose)", duration: 60, sequenceOrder: 1 },
          { name: "Vrksasana (Tree Pose)", duration: 90, sequenceOrder: 2 },
          {
            name: "Utthita Trikonasana (Extended Triangle Pose)",
            duration: 120,
            sequenceOrder: 3,
          },
          {
            name: "Utthita Parsvakonasana (Extended Side Angle Pose)",
            duration: 120,
            sequenceOrder: 4,
          },
          {
            name: "Virabhadrasana I (Warrior I)",
            duration: 90,
            sequenceOrder: 5,
          },
          {
            name: "Virabhadrasana II (Warrior II)",
            duration: 90,
            sequenceOrder: 6,
          },
          {
            name: "Parsvottanasana (Intense Side Stretch)",
            duration: 120,
            sequenceOrder: 7,
          },
          {
            name: "Salamba Sarvangasana I (Supported Shoulderstand)",
            duration: 180,
            sequenceOrder: 8,
          },
          { name: "Halasana (Plow Pose)", duration: 180, sequenceOrder: 9 },
          { name: "Savasana (Corpse Pose)", duration: 300, sequenceOrder: 10 }, // 5 minutes
        ],
      },
    },
  });

  await prisma.series.create({
    data: {
      week: 2,
      title: "Week 2 - Strengthening and Flexibility",
      description:
        "Continue building strength while incorporating flexibility.",
      postures: {
        create: [
          { name: "Tadasana (Mountain Pose)", duration: 60, sequenceOrder: 1 },
          { name: "Vrksasana (Tree Pose)", duration: 90, sequenceOrder: 2 },
          {
            name: "Utthita Trikonasana (Extended Triangle Pose)",
            duration: 120,
            sequenceOrder: 3,
          },
          {
            name: "Utthita Parsvakonasana (Extended Side Angle Pose)",
            duration: 120,
            sequenceOrder: 4,
          },
          {
            name: "Virabhadrasana I (Warrior I)",
            duration: 90,
            sequenceOrder: 5,
          },
          {
            name: "Virabhadrasana II (Warrior II)",
            duration: 90,
            sequenceOrder: 6,
          },
          {
            name: "Parsvottanasana (Intense Side Stretch)",
            duration: 120,
            sequenceOrder: 7,
          },
          {
            name: "Salamba Sarvangasana I (Supported Shoulderstand)",
            duration: 180,
            sequenceOrder: 8,
          },
          { name: "Halasana (Plow Pose)", duration: 180, sequenceOrder: 9 },
          { name: "Savasana (Corpse Pose)", duration: 300, sequenceOrder: 10 },
        ],
      },
    },
  });

  // Week 3 and 4 - Expanding Flexibility and Balance
  await prisma.series.create({
    data: {
      week: 3,
      title: "Week 3 - Expanding Flexibility and Balance",
      description: "Focus on flexibility and balance through deeper poses.",
      postures: {
        create: [
          {
            name: "Utthita Trikonasana (Extended Triangle Pose)",
            duration: 120,
            sequenceOrder: 1,
          },
          {
            name: "Utthita Parsvakonasana (Extended Side Angle Pose)",
            duration: 120,
            sequenceOrder: 2,
          },
          {
            name: "Virabhadrasana I (Warrior I)",
            duration: 90,
            sequenceOrder: 3,
          },
          {
            name: "Virabhadrasana II (Warrior II)",
            duration: 90,
            sequenceOrder: 4,
          },
          {
            name: "Parivritta Trikonasana (Revolved Triangle Pose)",
            duration: 120,
            sequenceOrder: 5,
          },
          {
            name: "Parsvottanasana (Intense Side Stretch)",
            duration: 120,
            sequenceOrder: 6,
          },
          {
            name: "Prasarita Padottanasana I (Wide-Legged Forward Bend)",
            duration: 120,
            sequenceOrder: 7,
          },
          {
            name: "Salamba Sarvangasana I (Supported Shoulderstand)",
            duration: 180,
            sequenceOrder: 8,
          },
          { name: "Halasana (Plow Pose)", duration: 180, sequenceOrder: 9 },
          { name: "Savasana (Corpse Pose)", duration: 300, sequenceOrder: 10 },
        ],
      },
    },
  });

  await prisma.series.create({
    data: {
      week: 4,
      title: "Week 4 - Balancing Strength and Flexibility",
      description:
        "Continue balancing strength and flexibility with advanced poses.",
      postures: {
        create: [
          {
            name: "Utthita Trikonasana (Extended Triangle Pose)",
            duration: 120,
            sequenceOrder: 1,
          },
          {
            name: "Utthita Parsvakonasana (Extended Side Angle Pose)",
            duration: 120,
            sequenceOrder: 2,
          },
          {
            name: "Virabhadrasana I (Warrior I)",
            duration: 90,
            sequenceOrder: 3,
          },
          {
            name: "Virabhadrasana II (Warrior II)",
            duration: 90,
            sequenceOrder: 4,
          },
          {
            name: "Parivritta Trikonasana (Revolved Triangle Pose)",
            duration: 120,
            sequenceOrder: 5,
          },
          {
            name: "Parsvottanasana (Intense Side Stretch)",
            duration: 120,
            sequenceOrder: 6,
          },
          {
            name: "Prasarita Padottanasana I (Wide-Legged Forward Bend)",
            duration: 120,
            sequenceOrder: 7,
          },
          {
            name: "Salamba Sarvangasana I (Supported Shoulderstand)",
            duration: 180,
            sequenceOrder: 8,
          },
          { name: "Halasana (Plow Pose)", duration: 180, sequenceOrder: 9 },
          { name: "Savasana (Corpse Pose)", duration: 300, sequenceOrder: 10 },
        ],
      },
    },
  });

  // Week 5 and 6 - Building Strength with Core Integration
  await prisma.series.create({
    data: {
      week: 5,
      title: "Week 5 - Strength and Core Integration",
      description:
        "Introduce core-strengthening poses and breathing exercises.",
      postures: {
        create: [
          {
            name: "Utthita Trikonasana (Extended Triangle Pose)",
            duration: 120,
            sequenceOrder: 1,
          },
          {
            name: "Utthita Parsvakonasana (Extended Side Angle Pose)",
            duration: 120,
            sequenceOrder: 2,
          },
          {
            name: "Virabhadrasana I (Warrior I)",
            duration: 90,
            sequenceOrder: 3,
          },
          {
            name: "Virabhadrasana II (Warrior II)",
            duration: 90,
            sequenceOrder: 4,
          },
          {
            name: "Parivritta Trikonasana (Revolved Triangle Pose)",
            duration: 120,
            sequenceOrder: 5,
          },
          {
            name: "Parsvottanasana (Intense Side Stretch)",
            duration: 120,
            sequenceOrder: 6,
          },
          {
            name: "Prasarita Padottanasana I (Wide-Legged Forward Bend)",
            duration: 120,
            sequenceOrder: 7,
          },
          {
            name: "Ordhva Prasarita Padasana (Upward Extended Feet Pose)",
            duration: 120,
            sequenceOrder: 8,
          },
          {
            name: "Paripoorna Navasana (Full Boat Pose)",
            duration: 90,
            sequenceOrder: 9,
          },
          {
            name: "Ardha Navasana (Half Boat Pose)",
            duration: 90,
            sequenceOrder: 10,
          },
          {
            name: "Salamba Sarvangasana I (Supported Shoulderstand)",
            duration: 180,
            sequenceOrder: 11,
          },
          { name: "Halasana (Plow Pose)", duration: 180, sequenceOrder: 12 },
          {
            name: "Ujjayi Pranayama (Victorious Breath) in Savasana",
            duration: 300,
            sequenceOrder: 13,
          },
        ],
      },
    },
  });

  await prisma.series.create({
    data: {
      week: 6,
      title: "Week 6 - Core Strength and Pranayama",
      description:
        "Continue to focus on core strength and pranayama breathing exercises.",
      postures: {
        create: [
          {
            name: "Utthita Trikonasana (Extended Triangle Pose)",
            duration: 120,
            sequenceOrder: 1,
          },
          {
            name: "Utthita Parsvakonasana (Extended Side Angle Pose)",
            duration: 120,
            sequenceOrder: 2,
          },
          {
            name: "Virabhadrasana I (Warrior I)",
            duration: 90,
            sequenceOrder: 3,
          },
          {
            name: "Virabhadrasana II (Warrior II)",
            duration: 90,
            sequenceOrder: 4,
          },
          {
            name: "Parivritta Trikonasana (Revolved Triangle Pose)",
            duration: 120,
            sequenceOrder: 5,
          },
          {
            name: "Parsvottanasana (Intense Side Stretch)",
            duration: 120,
            sequenceOrder: 6,
          },
          {
            name: "Prasarita Padottanasana I (Wide-Legged Forward Bend)",
            duration: 120,
            sequenceOrder: 7,
          },
          {
            name: "Ordhva Prasarita Padasana (Upward Extended Feet Pose)",
            duration: 120,
            sequenceOrder: 8,
          },
          {
            name: "Paripoorna Navasana (Full Boat Pose)",
            duration: 90,
            sequenceOrder: 9,
          },
          {
            name: "Ardha Navasana (Half Boat Pose)",
            duration: 90,
            sequenceOrder: 10,
          },
          {
            name: "Salamba Sarvangasana I (Supported Shoulderstand)",
            duration: 180,
            sequenceOrder: 11,
          },
          { name: "Halasana (Plow Pose)", duration: 180, sequenceOrder: 12 },
          {
            name: "Ujjayi Pranayama (Victorious Breath) in Savasana",
            duration: 300,
            sequenceOrder: 13,
          },
        ],
      },
    },
  });

  console.log("Database seeded with weeks 1 through 6 of yoga series.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
