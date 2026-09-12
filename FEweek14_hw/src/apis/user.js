// 이번 과제의 API는 실제 서버와 통신하지 않는 가상 API입니다.
// 실제로는 axios.post/put/get/delete로 아래 경로에 요청을 보내는 형태이며,
// 여기서는 메모리 저장소로 요청/응답을 흉내내 수정 사항이 마이페이지 조회에도 반영되게 합니다.
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const db = new Map();

const getUser = (userId) => {
  if (!db.has(userId)) {
    db.set(userId, { id: userId, username: `user${userId}`, password: '' });
  }
  return db.get(userId);
};

export const signUp = async (userData) => {
  console.log('[POST] /api/users', userData);
  await delay(300);
  const id = Date.now();
  db.set(id, { id, ...userData });
  return { id, ...userData };
};

export const updateProfile = async ({ userId, data }) => {
  console.log(`[PUT] /api/users/${userId}`, data);
  await delay(300);
  const updated = { ...getUser(userId), ...data };
  db.set(userId, updated);
  return updated;
};

export const getMyPage = async (userId) => {
  console.log(`[GET] /api/users/${userId}`);
  await delay(300);
  return { ...getUser(userId) };
};

export const deleteAccount = async (userId) => {
  console.log(`[DELETE] /api/users/${userId}`);
  await delay(300);
  db.delete(userId);
  return { success: true };
};
