import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const resolved = searchParams.get('resolved');

    const filter =
      resolved !== null ? { resolved: resolved === 'true' } : {};

    console.log('🔍 Filter:', filter);

    const incidents = await prisma.incident.findMany({
      where: filter,
      orderBy: { createdAt: 'desc' },
    });

    console.log('✅ Fetched incidents:', incidents.length);
    return NextResponse.json(incidents);
  } catch (error) {
    // ✅ FIXED: Removed `any`, used proper type guard
    if (error instanceof Error) {
      console.error('❌ Prisma fetch error:', error.message);
      return NextResponse.json(
        { error: 'Failed to fetch incidents', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to fetch incidents', details: 'Unknown error' },
      { status: 500 }
    );
  }
}
