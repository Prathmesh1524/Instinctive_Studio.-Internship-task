import { PrismaClient } from '@prisma/client';
import { subHours, addMinutes } from 'date-fns';

const prisma = new PrismaClient();

async function main() {
  // 1. Create Cameras
  const cameras = await prisma.camera.createMany({
    data: [
      { name: 'Shop Floor A', location: 'Building 1, Level G' },
      { name: 'Vault', location: 'Restricted Area, Basement' },
      { name: 'Entrance', location: 'Main Gate, North Wing' },
      { name: 'Parking Lot', location: 'Outside, East Side' },
    ],
  });

  // 2. Get camera IDs
  const allCameras = await prisma.camera.findMany();
  await prisma.incident.create({
    data: {
      cameraId: 1, // make sure this ID exists
      tsStart: new Date(),
      tsEnd: new Date(),
      type: "Unauthorised Access",
      thumbnailURL: "https://example.com/image.jpg",
      resolved: false,
    },
  });
  

  // 3. Define threat types
  const threatTypes = ['Unauthorized Access', 'Gun Threat', 'Face Recognised'];

  // 4. Generate 12+ Incidents
  const baseTime = new Date(); // now
  const incidents = [];

  for (let i = 0; i < 12; i++) {
    const camera = allCameras[i % allCameras.length];
    const tsStart = subHours(baseTime, 24 - i * 2); // spread over 24h
    const tsEnd = addMinutes(tsStart, 5 + i); // ends few minutes after start
    const type = threatTypes[i % threatTypes.length];

    incidents.push({
      cameraId: camera.id,
      tsStart,
      tsEnd,
      type,
      thumbnailURL: `/thumbnails/thumb${(i % 5) + 1}.jpg`,
      resolved: i % 2 === 0
    });
  }

  await prisma.incident.createMany({
    data: incidents,
  });

  console.log('✅ Seed completed successfully.');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
