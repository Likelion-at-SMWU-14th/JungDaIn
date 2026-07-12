import styled from "styled-components";

export const DimOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const ModalBox = styled.div`
  display: flex;
  gap: 24px;
  width: 640px;
  background: #202020ff;
  color: #fff;
  padding: 24px;
  max-width: 700px;
`;

export const CoverImg = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 8px;
  object-fit: cover;
`;

export const InfoBox = styled.div`
  h2 {
    font-size: 20px;
    margin-bottom: 4px;
  }
`;

export const SongTitle = styled.p`
  color: #fff;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ArtistName = styled.p`
  color: #ff5c8a;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const InfoTable = styled.table`
  font-size: 13px;
  margin-bottom: 20px;

  td:first-child {
    color: #bbb;
    padding-right: 16px;
  }
`;

export const LikeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
`;

export const HeartButton = styled.button`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  color: ${(props) => (props.$isFavorite ? "#ff5c8a" : "#fff")};
`;