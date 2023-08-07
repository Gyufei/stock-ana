import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

async function handler(req: Request, _res: Response) {
  const url = new URL(req.url);
  const fileName = url.searchParams.get('file');

  const jsonDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(jsonDirectory + `/${fileName}.json`, 'utf8');
  return NextResponse.json(JSON.parse(fileContents));
}

export { handler as GET, handler as POST };
