import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PATCH(
  req: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params;

  try {
    const incident = await prisma.incident.findUnique({
      where: { id },
    });

    if (!incident) {
      return NextResponse.json({ error: 'Incident not found' }, { status: 404 });
    }

    const updated = await prisma.incident.update({
      where: { id},
      data: { resolved: !incident.resolved },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating incident:', error);
    return NextResponse.json({ error: 'Failed to update incident' }, { status: 500 });
  }
}
