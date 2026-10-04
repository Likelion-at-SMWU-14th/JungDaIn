import { useEffect, useState } from "react";
import {
  createCafe,
  deleteCafe,
  getCafes,
  getErrorMessage,
  updateCafe,
} from "./api/cafes";
import loaderIcon from "./assets/icons/loader-brown.svg";
import CafeCard from "./components/CafeCard";
import CafeForm from "./components/CafeForm";
import EmptyState from "./components/EmptyState";
import ErrorBanner from "./components/ErrorBanner";
import Header from "./components/Header";
import LoadingSkeleton from "./components/LoadingSkeleton";
import * as S from "./styles/styled";
import type { Cafe, CafeFormValues, RegionFilter, SortOrder } from "./types/cafe";
import {
  formatSyncTime,
  matchesKeyword,
  matchesRegion,
  sortCafes,
} from "./utils/cafeFilters";

export default function App() {
  const [cafes, setCafes] = useState<Cafe[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [pendingId, setPendingId] = useState<Cafe["id"] | null>(null);
  const [error, setError] = useState("");
  const [lastSyncedAt, setLastSyncedAt] = useState<Date | null>(null);

  const [keyword, setKeyword] = useState("");
  const [region, setRegion] = useState<RegionFilter>("전체");
  const [sortOrder, setSortOrder] = useState<SortOrder>("recommend");

  async function handleCreate(values: CafeFormValues): Promise<boolean> {
    setSaving(true);
    setError("");
    try {
      const createdCafe = await createCafe({
        ...values,
        isFavorite: false,
        createdAt: new Date().toISOString(),
      });
      setCafes((currentCafes) => [...currentCafes, createdCafe]);
      setLastSyncedAt(new Date());
      return true;
    } catch (error: unknown) {
      setError(getErrorMessage(error));
      return false;
    } finally {
      setSaving(false);
    }
  }

  async function handleToggleFavorite(cafe: Cafe) {
    setPendingId(cafe.id);
    setError("");
    try {
      const updatedCafe = await updateCafe(cafe.id, {
        isFavorite: !cafe.isFavorite,
      });
      setCafes((currentCafes) =>
        currentCafes.map((item) => (item.id === updatedCafe.id ? updatedCafe : item)),
      );
      setLastSyncedAt(new Date());
    } catch (error: unknown) {
      setError(getErrorMessage(error));
    } finally {
      setPendingId(null);
    }
  }

  async function handleDelete(id: Cafe["id"]) {
    setPendingId(id);
    setError("");
    try {
      await deleteCafe(id);
      setCafes((currentCafes) => currentCafes.filter((cafe) => cafe.id !== id));
      setLastSyncedAt(new Date());
    } catch (error: unknown) {
      setError(getErrorMessage(error));
    } finally {
      setPendingId(null);
    }
  }

  function resetFilters() {
    setKeyword("");
    setRegion("전체");
  }

  // 처음 화면에 들어올 때 카페 목록 GET
  useEffect(() => {
    getCafes()
      .then((data) => {
        setCafes(data);
        setLastSyncedAt(new Date());
      })
      .catch((error: unknown) => setError(getErrorMessage(error)))
      .finally(() => setLoading(false));
  }, []);

  const isFiltering = keyword.trim() !== "" || region !== "전체";
  const visibleCafes = sortCafes(
    cafes.filter(
      (cafe) => matchesRegion(cafe, region) && matchesKeyword(cafe, keyword),
    ),
    sortOrder,
  );

  function renderHeading() {
    if (loading) {
      return (
        <S.SectionTitle>
          <S.LoadingMark>
            <S.Icon src={loaderIcon} alt="" $size={16} $spin />
          </S.LoadingMark>
          카페를 불러오는 중이에요...
        </S.SectionTitle>
      );
    }

    if (error) {
      return (
        <>
          <S.SectionTitle>저장된 카페</S.SectionTitle>
          <S.HeadingMeta>
            {lastSyncedAt
              ? `마지막 동기화 · ${formatSyncTime(lastSyncedAt)}`
              : "동기화 기록 없음"}
          </S.HeadingMeta>
        </>
      );
    }

    if (isFiltering && visibleCafes.length === 0) {
      return (
        <>
          <S.SectionTitle>검색 결과</S.SectionTitle>
          <S.HeadingMeta>0곳</S.HeadingMeta>
        </>
      );
    }

    return (
      <>
        <S.HeadingGroup>
          <S.SectionTitle>{isFiltering ? "검색 결과" : "오늘의 서울 카페"}</S.SectionTitle>
          <S.HeadingMeta $accent>{visibleCafes.length}곳</S.HeadingMeta>
        </S.HeadingGroup>
        <S.SortGroup>
          <S.SortButton
            type="button"
            $active={sortOrder === "recommend"}
            onClick={() => setSortOrder("recommend")}
          >
            추천순
          </S.SortButton>
          ·
          <S.SortButton
            type="button"
            $active={sortOrder === "latest"}
            onClick={() => setSortOrder("latest")}
          >
            최신순
          </S.SortButton>
        </S.SortGroup>
      </>
    );
  }

  function renderCafes() {
    if (loading) {
      return (
        <S.CardGrid>
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </S.CardGrid>
      );
    }

    if (error && cafes.length === 0) {
      return (
        <EmptyState
          title="카페를 불러오지 못했어요"
          description="JSON Server가 켜져 있는지 확인해주세요"
        />
      );
    }

    if (visibleCafes.length === 0) {
      return isFiltering ? (
        <EmptyState
          title="조건에 맞는 카페가 없어요"
          description="다른 지역이나 검색어를 시도해보세요"
          onReset={resetFilters}
        />
      ) : (
        <EmptyState
          title="아직 등록된 카페가 없어요"
          description="오른쪽 폼에서 첫 번째 카페를 등록해보세요"
        />
      );
    }

    return (
      <S.CardGrid>
        {visibleCafes.map((cafe) => (
          <CafeCard
            key={cafe.id}
            cafe={cafe}
            disabled={pendingId === cafe.id}
            onToggleFavorite={(target) => void handleToggleFavorite(target)}
            onDelete={(id) => void handleDelete(id)}
          />
        ))}
      </S.CardGrid>
    );
  }

  return (
    <S.Page>
      <Header
        keyword={keyword}
        region={region}
        onKeywordChange={setKeyword}
        onRegionChange={setRegion}
      />

      <S.Main>
        {error && <ErrorBanner message={error} onClose={() => setError("")} />}

        <S.ContentHeading>{renderHeading()}</S.ContentHeading>

        <S.Layout>
          <S.CardArea $dimmed={Boolean(error)}>{renderCafes()}</S.CardArea>

          <S.Aside $dimmed={Boolean(error)}>
            <CafeForm disabled={saving} onSubmit={handleCreate} />
            {error && (
              <S.AsideNote>연결이 복구되면 새 기록을 다시 등록할 수 있어요.</S.AsideNote>
            )}
          </S.Aside>
        </S.Layout>
      </S.Main>
    </S.Page>
  );
}