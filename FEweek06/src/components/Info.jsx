import { useState, useEffect } from 'react';

function UserInfo() {
    const [name,setName] = useState("");
    const [nickname,setNickname] = useState("");

    useEffect(() => {
        console.log("nickname이 변경될 때마다 렌더링!");
        console.log({ nickname });
    }, [nickname]);

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