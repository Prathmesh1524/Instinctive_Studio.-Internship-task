import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = parseInt(params.id, 10); // ⬅️ Correct usage here

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid incident ID' }, { status: 400 });
  }

  try {
    const incident = await prisma.incident.findUnique({
      where: { id },
    });

    if (!incident) {
      return NextResponse.json({ error: 'Incident not found' }, { status: 404 });
    }

    const updated = await prisma.incident.update({
      where: { id },
      data: { resolved: !incident.resolved },
    });

    return NextResponse.json(updated);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('❌ Error updating incident:', message);

    return NextResponse.json(
      { error: 'Failed to update incident', details: message },
      { status: 500 }
    );
  }
}
