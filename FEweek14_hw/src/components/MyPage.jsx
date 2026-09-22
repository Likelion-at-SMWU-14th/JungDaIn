import { useMyPage } from '../hooks/useMyPage';
import { useDeleteAccount } from '../hooks/useDeleteAccount';

function MyPage({ userId }) {
  const { data, isPending, error } = useMyPage(userId);
  const { mutate: deleteUser, isPending: isDeleting } = useDeleteAccount();

  const handleDelete = () => {
    const confirmed = window.confirm('정말 탈퇴하시겠습니까?');
    if (confirmed) {
      deleteUser(userId);
    }
  };

  if (isPending) return <p>로딩중...</p>;
  if (error) return <p>마이페이지 정보를 불러오지 못했습니다.</p>;

  return (
    <div>
      <h2>{data.username}님의 마이페이지</h2>
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? '탈퇴 처리 중...' : '회원 탈퇴'}
      </button>
    </div>
  );
}

export default MyPage;