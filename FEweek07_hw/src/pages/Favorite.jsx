import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import {
  FavoritWrapper,
  Header,
  NoteIcon,
  SongGrid,
  SongCard,
  SongTitle,
  SongArtist,
  EmptyState,
} from "./Favorite.styles";

function Favorite({ songs, favoriteId }) {
  const navigate = useNavigate();

  const favoriteSongs = useMemo(
    () => songs.filter((song) => favoriteId.includes(song.id)),
    [songs, favoriteId]
  );

  return (
    <FavoritWrapper>
      <Header>
        <h1>My "Favorit" playlist ♡</h1>
        <NoteIcon onClick={() => navigate("/")}>♪</NoteIcon>
      </Header>

      {favoriteSongs.length > 0 ? (
        <SongGrid>
          {favoriteSongs.map((song) => (
            <SongCard key={song.id}>
              <img src={song.cover} alt={song.title} />
              <SongTitle>{song.title}</SongTitle>
              <SongArtist>{song.artist}</SongArtist>
            </SongCard>
          ))}
        </SongGrid>
      ) : (
        <EmptyState>아직 즐겨찾기한 곡이 없어요!</EmptyState>
      )}
    </FavoritWrapper>
  );
}

export default Favorite;