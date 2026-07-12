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
} from "./Favorit.styles";

function Favorit({ songs, favoriteIds }) {
  const favoriteSongs = useMemo(
    () => songs.filter((song) => favoriteIds.includes(song.id)),
    [songs, favoriteIds]
  );

  return (
    <FavoritWrapper>
      <Header>
        <h1>My "Favorit" playlist ♡</h1>
        <NoteIcon>♪</NoteIcon>
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

export default Favorit;