import styled from "styled-components";

export const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #fdf4f7;
  overflow: hidden;
`;

export const ProfileButton = styled.button`
  position: absolute;
  top: 32px;
  right: 48px;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
`;

export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 24px;
`;

export const TitleRow = styled.h1`
  margin-top: -5%;
  font-size: 70px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SearchInput = styled.input`
  width: 420px;
  padding: 14px 20px;
  border-radius: 24px;
  border: 1px solid #333;
  font-size: 15px;
  text-align: center;

  &:focus {
    outline: none;
    border-color: #000;
  }
`;

export const CarouselRow = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const ArrowButton = styled.button`
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;

  &:disabled {
    cursor: default;
    color: #ddd;
  }
`;

export const SongList = styled.div`
  display: flex;
  margin-top: 5%;
  gap: 100px;
`;

export const SongCard = styled.div`
  cursor: pointer;
  text-align: center;

  img {
    width: 300px;
    height: 300px;
    border-radius: 8px;
    object-fit: cover;
    background: #d9d9d9;
  }
`;

export const SongTitle = styled.p`
  margin-top: 12px;
  font-weight: 600;
  font-size: 15px;
`;

export const SongArtist = styled.p`
  font-size: 13px;
  color: #888;
`;

export const NoResult = styled.p`
  color: #aaa;
  font-size: 14px;
`;