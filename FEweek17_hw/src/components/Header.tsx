import coffeeIcon from "../assets/icons/coffee.svg";
import searchIcon from "../assets/icons/search.svg";
import * as S from "../styles/styled";
import { REGIONS } from "../types/cafe";
import type { RegionFilter } from "../types/cafe";

interface HeaderProps {
  keyword: string;
  region: RegionFilter;
  onKeywordChange: (keyword: string) => void;
  onRegionChange: (region: RegionFilter) => void;
}

const REGION_FILTERS: RegionFilter[] = ["전체", ...REGIONS];

export default function Header({
  keyword,
  region,
  onKeywordChange,
  onRegionChange,
}: HeaderProps) {
  return (
    <S.Header>
      <S.Brand>
        <S.BrandMark>
          <S.Icon src={coffeeIcon} alt="" $size={22} />
        </S.BrandMark>
        <S.ServiceName>서울 카페 노트</S.ServiceName>
      </S.Brand>

      <S.SearchBar>
        <S.Icon src={searchIcon} alt="" $size={20} />
        <S.SearchInput
          type="search"
          value={keyword}
          onChange={(event) => onKeywordChange(event.target.value)}
          placeholder="카페 이름이나 태그로 검색"
          aria-label="카페 검색"
        />
      </S.SearchBar>

      <S.RegionFilter>
        <S.FilterLabel>지역</S.FilterLabel>
        {REGION_FILTERS.map((item) => (
          <S.FilterChip
            key={item}
            type="button"
            $selected={region === item}
            aria-pressed={region === item}
            onClick={() => onRegionChange(item)}
          >
            {item}
          </S.FilterChip>
        ))}
      </S.RegionFilter>
    </S.Header>
  );
}