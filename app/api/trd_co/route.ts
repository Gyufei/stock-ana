import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

async function handler(_req: Request, _res: Response) {
  // const url = new URL(req.url);

  const result = await prisma.trd_co.findMany();

  return NextResponse.json(result);
}

export { handler as GET, handler as POST };
