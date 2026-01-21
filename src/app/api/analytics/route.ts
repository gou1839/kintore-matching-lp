import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// データファイルのパス
const DATA_FILE = path.join(process.cwd(), 'data', 'analytics.json');

// データファイルの初期化（存在しない場合）
async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    // ファイルが存在しない場合は作成
    const dir = path.dirname(DATA_FILE);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify({}), 'utf-8');
  }
}

// カウントデータの読み込み
async function readCounts() {
  await ensureDataFile();
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

// カウントデータの保存
async function writeCounts(counts: Record<string, number>) {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(counts, null, 2), 'utf-8');
}

// POST: カウントアップ
export async function POST(request: NextRequest) {
  try {
    const { source } = await request.json();
    
    if (!source || typeof source !== 'string') {
      return NextResponse.json(
        { error: 'source parameter is required' },
        { status: 400 }
      );
    }

    const counts = await readCounts();
    counts[source] = (counts[source] || 0) + 1;
    await writeCounts(counts);

    return NextResponse.json({ 
      success: true, 
      count: counts[source],
      source 
    });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET: カウント取得
export async function GET() {
  try {
    const counts = await readCounts();
    return NextResponse.json({ counts });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
