export async function GET() {
    return Response.json(
      { message: 'This endpoint is disabled in production' },
      { status: 403 }
    );
  }