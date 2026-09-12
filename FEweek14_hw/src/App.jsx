import './App.css'
import SignUp from './components/SignUp'
import EditProfile from './components/EditProfile'
import MyPage from './components/MyPage'

function App() {
  const testUserId = 1; // 임시 아이디

  return (
    <div>
      <h1>회원가입</h1>
      <SignUp />

      <h1>개인정보 수정</h1>
      <EditProfile userId={testUserId} />

      <h1>마이페이지</h1>
      <MyPage userId={testUserId} />
    </div>
  )
}

export default App