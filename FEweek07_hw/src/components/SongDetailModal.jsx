import {
  DimOverlay,
  ModalBox,
  CoverImg,
  InfoBox,
  ArtistName,
  InfoTable,
  LikeRow,
  HeartButton,
} from "./SongDetailModal.styles";

function SongDetailModal({ song, modalRef, isFavorite, onToggleFavorite }) {
  return (
    <DimOverlay>
      <ModalBox ref={modalRef}>
        <CoverImg src={song.cover} alt={song.title} />
        <InfoBox>
          <h2>{song.title}</h2>
          <ArtistName>{song.artist}</ArtistName>
          <InfoTable>
            <tbody>
              <tr><td>앨범</td><td>{song.album}</td></tr>
              <tr><td>발매일</td><td>{song.releaseDate}</td></tr>
              <tr><td>장르</td><td>{song.genre}</td></tr>
              <tr><td>FLAC</td><td>{song.flac}</td></tr>
            </tbody>
          </InfoTable>
          <LikeRow>
            <span>이 곡이 마음에 드시나요?</span>
            <HeartButton $isFavorite={isFavorite} onClick={onToggleFavorite}>
              {isFavorite ? "♥" : "♡"}
            </HeartButton>
          </LikeRow>
        </InfoBox>
      </ModalBox>
    </DimOverlay>
  );
}

export default SongDetailModal;