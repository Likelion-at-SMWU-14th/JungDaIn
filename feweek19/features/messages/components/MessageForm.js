"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MessageForm() {
  
  // 실습에서 채워봐요 ~

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <h2>메시지 남기기</h2>
      <label htmlFor="name">이름</label>
      <input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="이름을 입력해 주세요" required />
      <label htmlFor="content">메시지</label>
      <textarea id="content" value={content} onChange={(event) => setContent(event.target.value)} 
      placeholder="함께 나누고 싶은 이야기를 적어 주세요" rows={4} required />
      <button type="submit">메시지 등록</button>
    </form>
  );
}
