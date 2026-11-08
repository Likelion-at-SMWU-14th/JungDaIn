import "./globals.css";

export const metadata = {
  title: "숙멋 방명록",
  description: " Next.js 세미나 실습",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}