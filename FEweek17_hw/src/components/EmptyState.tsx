import emptyCupImage from "../assets/icons/empty-cup.svg";
import rotateIcon from "../assets/icons/rotate-ccw.svg";
import * as S from "../styles/styled";

interface EmptyStateProps {
  title: string;
  description: string;
  onReset?: () => void;
}

export default function EmptyState({ title, description, onReset }: EmptyStateProps) {
  return (
    <S.EmptyPanel>
      <img src={emptyCupImage} alt="" width={136} height={112} />

      <S.EmptyCopy>
        <S.EmptyTitle>{title}</S.EmptyTitle>
        <S.EmptyDescription>{description}</S.EmptyDescription>
      </S.EmptyCopy>

      {onReset && (
        <S.ResetButton type="button" onClick={onReset}>
          <S.Icon src={rotateIcon} alt="" $size={15} />
          필터 초기화
        </S.ResetButton>
      )}
    </S.EmptyPanel>
  );
}