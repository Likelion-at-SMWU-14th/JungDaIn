import heartOffIcon from "../assets/icons/heart-off.svg";
import heartOnIcon from "../assets/icons/heart-on.svg";
import mapPinIcon from "../assets/icons/map-pin.svg";
import starIcon from "../assets/icons/star.svg";
import * as S from "../styles/styled";
import type { Cafe } from "../types/cafe";

interface CafeCardProps {
  cafe: Cafe;
  disabled: boolean;
  onToggleFavorite: (cafe: Cafe) => void;
  onDelete: (id: Cafe["id"]) => void;
}

export default function CafeCard({
  cafe,
  disabled,
  onToggleFavorite,
  onDelete,
}: CafeCardProps) {
  return (
    <S.Card>
      <S.CardHeader>
        <S.TitleGroup>
          <S.CardTitle>{cafe.name}</S.CardTitle>
          <S.Metadata>
            <S.RegionBadge>{cafe.region}</S.RegionBadge>
            <S.Rating>
              <S.Icon src={starIcon} alt="" $size={15} />
              {cafe.rating.toFixed(1)}
            </S.Rating>
          </S.Metadata>
        </S.TitleGroup>

        <S.FavoriteButton
          type="button"
          $active={cafe.isFavorite}
          disabled={disabled}
          aria-pressed={cafe.isFavorite}
          aria-label={cafe.isFavorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}
          onClick={() => onToggleFavorite(cafe)}
        >
          <S.Icon
            src={cafe.isFavorite ? heartOnIcon : heartOffIcon}
            alt=""
            $size={19}
          />
        </S.FavoriteButton>
      </S.CardHeader>

      <S.Address>
        <S.Icon src={mapPinIcon} alt="" $size={15} />
        {cafe.address}
      </S.Address>

      {cafe.tags.length > 0 && (
        <S.Tags>
          {cafe.tags.map((tag) => (
            <S.Tag key={tag}>#{tag}</S.Tag>
          ))}
        </S.Tags>
      )}

      <S.Description>{cafe.description}</S.Description>

      <S.CardFooter>
        <S.FooterMark>CAFE NOTE · SEOUL</S.FooterMark>
        <S.DeleteButton
          type="button"
          disabled={disabled}
          onClick={() => onDelete(cafe.id)}
        >
          삭제
        </S.DeleteButton>
      </S.CardFooter>
    </S.Card>
  );
}