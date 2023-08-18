import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

async function handler(req: Request, _res: Response) {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();
  if (!id) return NextResponse.error();

  const result = await prisma.dataset.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!result) return NextResponse.error();

  result.content = JSON.parse(result.content.toString());
  return NextResponse.json(result);
}

export { handler as GET, handler as POST };
