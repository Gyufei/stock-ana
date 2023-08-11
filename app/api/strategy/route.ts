import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

async function handler(req: Request, _res: Response) {
  const url = new URL(req.url);
  const searchParams = url.searchParams;
  const type = searchParams.get('type');

  const result = await prisma.strategy.findMany({
    where: {
      type: type,
    },
  });

  return NextResponse.json(result);
}

export { handler as GET, handler as POST };
