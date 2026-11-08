import { addBook, getBooks } from "@/features/books/server/service";

export function GET() {
  return Response.json(getBooks());
}

export async function POST(request) {
  const { title, author } = await request.json();

  if (!title?.trim()) {
    return Response.json(
      { message: "책 제목을 입력해 주세요." },
      { status: 400 }
    );
  }

  const book = addBook(title.trim(), author?.trim() || "작가 미상");
  return Response.json(book, { status: 201 });
}