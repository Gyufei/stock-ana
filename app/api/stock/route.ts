import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

async function handler(req: Request, _res: Response) {
  const url = new URL(req.url);
  const searchParams = url.searchParams;
  const q = searchParams.get('q');
  if (!q) {
    return NextResponse.json([]);
  }

  const result = await prisma.trd_co.findMany({
    where: {
      OR: [
        {
          Stkcd: {
            contains: q,
          },
        },
        {
          Stknme: {
            contains: q,
          },
        },
      ],
    },
  });

  return NextResponse.json(result);
}

export { handler as GET, handler as POST };
