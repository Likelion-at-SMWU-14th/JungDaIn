import { getBook, removeBook, toggleBook } from "@/features/books/server/service";

export async function GET(request, { params }) {
  const { id } = await params;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const book = getBook(Number(id));
  if (!book) {
    return Response.json({ message: "책을 찾을 수 없어요." }, { status: 404 });
  }

  return Response.json(book);
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const book = toggleBook(Number(id));

  if (!book) {
    return Response.json({ message: "책을 찾을 수 없어요." }, { status: 404 });
  }

  return Response.json(book);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const book = removeBook(Number(id));

  if (!book) {
    return Response.json({ message: "책을 찾을 수 없어요." }, { status: 404 });
  }

  return Response.json(book);
}