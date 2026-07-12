import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../hooks/useModal";
import SongDetailModal from "../components/SongDetailModal";
import {
  MainWrapper,
  Header,
  ProfileButton,
  SearchInput,
  SongList,
  SongCard,
  SongTitle,
  SongArtist,
  NoResult,
} from "./Main.styles";

function Main({ songs, isFavorite, toggleFavorite }) {
  const navigate = useNavigate();
  const { selectedSong, modalRef, openModal, closeModal } = useModal();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSongs = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();
    if (!keyword) return songs;
    return songs.filter(
      (song) =>
        song.title.toLowerCase().includes(keyword) ||
        song.artist.toLowerCase().includes(keyword)
    );
  }, [songs, searchTerm]);

  return (
    <MainWrapper>
      <Header>
        <h1>♡ My playlist ♡</h1>
        <ProfileButton onClick={() => navigate("/favorit")}>👤</ProfileButton>
      </Header>

      <SearchInput
        placeholder="좋아하는 곡을 입력하세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <SongList>
        {filteredSongs.map((song) => (
          <SongCard key={song.id} onClick={() => openModal(song)}>
            <img src={song.cover} alt={song.title} />
            <SongTitle>{song.title}</SongTitle>
            <SongArtist>{song.artist}</SongArtist>
          </SongCard>
        ))}
      </SongList>

      {filteredSongs.length === 0 && <NoResult>검색 결과가 없어요</NoResult>}

      {selectedSong && (
        <SongDetailModal
          song={selectedSong}
          modalRef={modalRef}
          isFavorite={isFavorite(selectedSong.id)}
          onToggleFavorite={() => toggleFavorite(selectedSong.id)}
        />
      )}
    </MainWrapper>
  );
}

export default Main;