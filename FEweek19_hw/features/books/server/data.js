if (!globalThis.books) {
  globalThis.books = [
    { id: 1, title: "데미안", author: "헤르만 헤세", done: true },
    { id: 2, title: "채식주의자", author: "한강", done: false },
    { id: 3, title: "아몬드", author: "손원평", done: false },
  ];
}

export const books = globalThis.books;