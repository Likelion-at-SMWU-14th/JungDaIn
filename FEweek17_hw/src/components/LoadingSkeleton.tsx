import favoritePlaceholder from "../assets/icons/favorite-placeholder.svg";
import * as S from "../styles/styled";

export default function LoadingSkeleton() {
  return (
    <S.SkeletonCard aria-hidden="true">
      <S.SkeletonRow $gap={8} $spread>
        <S.SkeletonRow $column $gap={10}>
          <S.SkeletonBlock $width="138px" $height={18} />
          <S.SkeletonBlock $width="76px" $height={24} $light $pill />
        </S.SkeletonRow>
        <S.Icon src={favoritePlaceholder} alt="" $size={36} />
      </S.SkeletonRow>

      <S.SkeletonBlock $width="190px" $height={12} />

      <S.SkeletonRow $gap={8}>
        <S.SkeletonBlock $width="66px" $height={25} $light $pill />
        <S.SkeletonBlock $width="82px" $height={25} $light $pill />
      </S.SkeletonRow>

      <S.SkeletonRow $column $gap={9}>
        <S.SkeletonBlock $width="100%" $height={12} />
        <S.SkeletonBlock $width="220px" $height={12} $light />
      </S.SkeletonRow>

      <S.SkeletonBlock $width="100px" $height={10} $light />
    </S.SkeletonCard>
  );
}