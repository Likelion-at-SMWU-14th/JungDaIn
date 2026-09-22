import { useState } from 'react';
import { useUpdateProfile } from '../hooks/useUpdateProfile';

function EditProfile({ userId }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: updateUser, isPending, isError } = useUpdateProfile();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ userId, data: { username, password } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="변경할 아이디"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="변경할 비밀번호"
      />
      <button type="submit" disabled={isPending}>
        {isPending ? '수정 중...' : '수정하기'}
      </button>
      {isError && <p>수정에 실패했습니다. 다시 시도해주세요.</p>}
    </form>
  );
}

export default EditProfile;