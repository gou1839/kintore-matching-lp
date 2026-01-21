import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'redis';

// Redisクライアントのシングルトン（接続を再利用）
let redisClient: ReturnType<typeof createClient> | null = null;

// Redisクライアントを取得（接続済みの場合は再利用）
async function getRedisClient() {
  if (!redisClient) {
    redisClient = createClient({ url: process.env.REDIS_URL });
    redisClient.on('error', (err) => console.error('Redis Client Error', err));
    await redisClient.connect();
  }
  return redisClient;
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

    const redis = await getRedisClient();
    const key = `analytics:${source}`;
    const count = await redis.incr(key);

    return NextResponse.json({ 
      success: true, 
      count,
      source 
    });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// GET: カウント取得
export async function GET() {
  try {
    const redis = await getRedisClient();
    const keys = await redis.keys('analytics:*');
    const counts: Record<string, number> = {};
    
    // 各キーの値を取得
    if (keys && keys.length > 0) {
      const values = await redis.mGet(keys);
      
      keys.forEach((key, index) => {
        const source = key.replace('analytics:', '');
        const count = values[index] ? parseInt(values[index] as string, 10) : 0;
        counts[source] = count;
      });
    }
    
    return NextResponse.json({ counts });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
