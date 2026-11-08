import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "나의 독서 기록",
  description: "Next.js로 만든 나의 독서 기록 서비스",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}