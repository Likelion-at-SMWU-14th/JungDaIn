import styled from "styled-components";

export const FavoritWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fdf4f7;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  h1 {
    font-size: 40px;
    font-weight: 600;
    color: #d1447a;
  }
`;

export const NoteIcon = styled.span`
  font-size: 20px;
  color: #d1447a;
`;

export const SongGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const SongCard = styled.div`
  text-align: center;

  img {
    width: 40%;
    border-radius: 10px;
    object-fit: cover;
    background: #f0dde3;
  }
`;

export const SongTitle = styled.p`
  margin-top: 8px;
  font-weight: 600;
  font-size: 14px;
`;

export const SongArtist = styled.p`
  font-size: 12px;
  color: #c98;
`;

export const EmptyState = styled.p`
  text-align: center;
  color: #cc99aa;
  padding: 40px 0;
`;