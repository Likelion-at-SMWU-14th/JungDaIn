import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../hooks/useModal";
import SongDetailModal from "../components/SongDetailModal";
import {
  MainWrapper,
  ProfileButton,
  CenterContent,
  TitleRow,
  SearchInput,
  CarouselRow,
  ArrowButton,
  SongList,
  SongCard,
  SongTitle,
  SongArtist,
  NoResult,
} from "./Main.styles";

const PAGE_SIZE = 3;

function Main({ songs, isFavorite, toggleFavorite }) {
  const navigate = useNavigate();
  const { selectedSong, modalRef, openModal, closeModal } = useModal();
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);

  const filteredSongs = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();
    if (!keyword) return songs;
    return songs.filter(
      (song) =>
        song.title.toLowerCase().includes(keyword) ||
        song.artist.toLowerCase().includes(keyword)
    );
  }, [songs, searchTerm]);

  useEffect(() => {
    setPage(0);
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredSongs.length / PAGE_SIZE);
  const visibleSongs = filteredSongs.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const goPrev = () => setPage((p) => Math.max(p - 1, 0));
  const goNext = () => setPage((p) => Math.min(p + 1, totalPages - 1));

  return (
    <MainWrapper>
      <ProfileButton onClick={() => navigate("/favorite")}>👤</ProfileButton>

      <CenterContent>
        <TitleRow>♡ My playlist ♡</TitleRow>

        <SearchInput
          placeholder="좋아하는 곡을 입력하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filteredSongs.length === 0 ? (
          <NoResult>검색 결과가 없어요</NoResult>
        ) : (
          <CarouselRow>
            <ArrowButton onClick={goPrev} disabled={page === 0}>
              ◀
            </ArrowButton>

            <SongList>
              {visibleSongs.map((song) => (
                <SongCard key={song.id} onClick={() => openModal(song)}>
                  <img src={song.cover} alt={song.title} />
                  <SongTitle>{song.title}</SongTitle>
                  <SongArtist>{song.artist}</SongArtist>
                </SongCard>
              ))}
            </SongList>

            <ArrowButton onClick={goNext} disabled={page >= totalPages - 1}>
              ▶
            </ArrowButton>
          </CarouselRow>
        )}
      </CenterContent>

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