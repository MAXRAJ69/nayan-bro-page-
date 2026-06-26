import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json(
      { error: 'YouTube API Key not configured' },
      { status: 500 }
    );
  }

  try {
    // We use the forHandle parameter to get the channel by its handle
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=statistics&forHandle=@AssassinsARMY&key=${apiKey}`,
      { 
        next: { revalidate: 60 } // Cache for 60 seconds so we don't hit API limits
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('YouTube API Error:', data);
      return NextResponse.json(
        { error: 'Failed to fetch YouTube data', details: data },
        { status: response.status }
      );
    }

    if (data.items && data.items.length > 0) {
      const stats = data.items[0].statistics;
      return NextResponse.json({
        subscribers: parseInt(stats.subscriberCount, 10),
        views: parseInt(stats.viewCount, 10),
      });
    }

    return NextResponse.json({ error: 'Channel not found' }, { status: 404 });
  } catch (error) {
    console.error('Error in YouTube API route:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
