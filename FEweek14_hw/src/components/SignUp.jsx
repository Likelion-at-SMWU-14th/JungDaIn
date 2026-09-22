import { useState } from 'react';
import { useSignUp } from '../hooks/useSignUp';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: signUpUser, isPending } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpUser({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="아이디"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
      />
      <button type="submit" disabled={isPending}>
        {isPending ? '가입 중...' : '회원가입'}
      </button>
    </form>
  );
}

export default SignUp;