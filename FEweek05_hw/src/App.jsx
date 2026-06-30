import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";  
import BannerCard from "./components/BannerCard";
import BookCard from "./components/BookCard";
import CategoryTab from "./components/CategoryTab";

import book1 from "./assets/book1.jpg";
import book2 from "./assets/book2.jpg";
import md1 from "./assets/md1.jpg";
import md2 from "./assets/md2.jpg";
import md3 from "./assets/md3.jpg";

// 이미지는 직접 준비하거나 placeholder 사용
const BANNERS = [
  {
    title: "고소한 빵 향기에 실린\n일상의 수수께끼들",
    subTitle: "순도 100% 무해함 가득",
    imgSrc: book1,   // ← 문자열 말고 import한 변수로
    bgColor: "#f5f0e8",
    dark: false,
  },
  {
    title: "세계사가 처음인 사람도\n끝까지 읽는 책!",
    subTitle: "최태성 강력 추천! 10년 연속 1위",
    imgSrc: book2,
    bgColor: "#2d2d2d",
    dark: true,
  },
];

const BOOKS = [
  { id: 1, title: "정원 이야기", imgSrc: md1, highlight: false },
  { id: 2, title: "우리의 여름은 문장이 된다", imgSrc: md2, highlight: false },
  { id: 3, title: "10대를 위한 꽉 변호사의 법률교실", imgSrc: md3, highlight: false },
];
const TABS = ["국내도서", "외국도서", "eBook", "sam", "핫트랙스"];

const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  font-family: 'Pretendard', sans-serif;
`;

const BannerSection = styled.section`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const TabWrapper = styled.div`
  display: flex;
`;

const BookGrid = styled.div`
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
`;

function App() {
  return (
    <>
    <Header />
      <AppWrapper>
        <BannerSection>
          {BANNERS.map((banner, idx) => (
            <BannerCard key={idx} {...banner} />
          ))}
        </BannerSection>

        <SectionHeader>
          <SectionTitle>MD들이 신중하게 골랐어요</SectionTitle>
          <TabWrapper>
            {TABS.map((tab, idx) => (
              <CategoryTab key={idx} label={tab} active={idx === 0} />
            ))}
          </TabWrapper>
        </SectionHeader>

        <BookGrid>
          {BOOKS.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </BookGrid>
      </AppWrapper>
    </>
  );
}

export default App;