import './App.css'
import LionCard1 from './components/LionCard1'
import LionCard2 from './components/LionCard2'
import LionCard3 from './components/LionCard3'

function App() {
  const liar = '가짜 아기사자'
  return (
    <>
      <h1>{liar}를 찾아라!</h1>
      <LionCard1/>
      <LionCard2/>
      <LionCard3/>
    </>
  )
}

export default App
