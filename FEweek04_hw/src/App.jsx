import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import food1 from './assets/food1.png';
import food2 from './assets/food2.png';
import bgimg from './assets/bgimg.png';

const foodData = [
  {
    id: 1,
    name: '비일',
    category: '양식',
    isRecommended: true,
    desc: '학교 앞에서 제일 좋아하는 양식집이에요!\n최애 메뉴는 김치볶음밥입니다',
    image: food1,
  },
  {
    id: 2,
    name: '고수찜닭',
    category: '한식',
    isRecommended: false,
    desc: '매콤달콤 찜닭이 제일 맛있습니다\n치즈 추가도 꼭 해 드세요',
    image: food2,
  },
];

function App() {
  return (
    <div style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      minHeight: '100vh',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1 style={{
        color: '#000',
        textAlign: 'center',
        fontSize: '80px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
        marginBottom: '62px',
      }}>
        내 취향 맛집을 찾아서...
      </h1>
      <div style={{ display: 'flex', gap: '238px', marginBottom: '71px' }}>
        <Button label="숙대편" isActive={true} />
        <Button label="홍대편" isActive={false} />
        <Button label="성수편" isActive={false} />
      </div>
      <div style={{ display: 'flex', gap: '226px' }}>
        {foodData.map(food => (
          <Card key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
}

export default App;