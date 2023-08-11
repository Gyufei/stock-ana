import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

async function handler(req: Request, _res: Response) {
  const url = new URL(req.url);
  const searchParams = url.searchParams;
  const type = searchParams.get('type') || undefined;

  const result = await prisma.dataset.findMany({
    where: {
      type: type,
    },
  });

  result.map((r: any) => {
    try {
      r.content = JSON.parse(r.content.toString());
    } catch {
      r.content = [];
    }
  });

  return NextResponse.json(result);
}

export { handler as GET, handler as POST };
