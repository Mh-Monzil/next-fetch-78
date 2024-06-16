// export const dynamic = 'force-dynamic'; caching from server

export async function GET() {
    return Response.json({
        currentTime: new Date().toLocaleTimeString()
    })
}