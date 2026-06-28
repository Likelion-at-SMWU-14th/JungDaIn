import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 40px;
  padding: 20px 24px;
`;

const Logo = styled.h1`
  color: #000d9a;
  font-family: "Gong Gothic", sans-serif;
  font-size: 32px;
  font-weight: 500;
  white-space: nowrap;
`;

const SearchBar = styled.div`
  width: 729px;
  height: 66px;
  border-radius: 50px;
  border: 1.5px solid #dadada;
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 12px;
`;

const SearchLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
`;

const SearchCategory = styled.span`
  color: #000;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 20px;
  font-weight: 500;
`;

const Divider = styled.span`
  color: #dadada;
  font-size: 20px;
`;

const SearchPlaceholder = styled.span`
  color: #999;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 20px;
  font-weight: 500;
`;

const Separator = styled.hr`
  width: 100%;
  height: 1px;
  background: #c0c0c0;
  border: none;
`;

function Header() {
  return (
    <>
      <HeaderWrapper>
        <Logo>KYOBO 교보문고</Logo>
        <SearchBar>
          <SearchLeft>
            <SearchCategory>통합검색 ▼</SearchCategory>
          </SearchLeft>
          <Divider>|</Divider>
          <SearchPlaceholder>케이팝 데몬 헌터스 원작의 감동 그대로!</SearchPlaceholder>
        </SearchBar>
      </HeaderWrapper>
      <Separator />
    </>
  );
}

export default Header;