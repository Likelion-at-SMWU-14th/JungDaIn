import { useState } from 'react';

function UserInfo() {
    const [name,setName] = useState("");
    const [nickname,setNickname] = useState("");

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름 입력"
            />
            <input
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="닉네임 입력"
            />
            <p>이름: {name}</p>
            <p>닉네임: {nickname}</p>
        </div>
    );
}

export default UserInfo;