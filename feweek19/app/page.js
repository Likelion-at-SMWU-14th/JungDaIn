import { headers } from "next/headers";
import MessageForm from "@/features/messages/components/MessageForm";

export default async function Home() {

	// 실습 때 채워봅시다 ~

  return (
    <main className="container">
      <header className="hero">
        <span className="badge">SOOKMYUNG LIKELION · NEXT.JS</span>
        <h1>숙멋 방명록 🦁</h1>
        <p>마지막 세미나의 소감을 남겨주세요 ! !</p>
      </header>
      <div className="layout">
        <MessageForm />
        <section className="messages" aria-labelledby="messages-title">
          <div className="section-heading">
            <h2 id="messages-title">메시지 목록</h2>
            <span>{messages.length}개</span>
          </div>
          {messages.length === 0 ? <p>첫 번째 메시지를 남겨 주세요!</p> : (
            <ul className="message-list">
              {messages.map((message) => (
                <li className="message-card" key={message.id}>
                  <strong>{message.name}</strong>
                  <p>{message.content}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
