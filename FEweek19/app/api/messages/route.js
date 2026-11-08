import { addMessage, getMessages } from "@/features/messages/server/service";

export function GET() {
    return Response.json(getMessages());
}

export async function POST(request) {
    const { name, content } = await request.json();
    const message = addMessage(name, content);
    return Response.json(message, { status: 201 });    
}