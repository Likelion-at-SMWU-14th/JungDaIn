import alertIcon from "../assets/icons/triangle-alert.svg";
import closeIcon from "../assets/icons/x.svg";
import * as S from "../styles/styled";

interface ErrorBannerProps {
  message: string;
  onClose: () => void;
}

export default function ErrorBanner({ message, onClose }: ErrorBannerProps) {
  return (
    <S.ErrorBanner role="alert">
      <S.WarningMark>
        <S.Icon src={alertIcon} alt="" $size={18} />
      </S.WarningMark>
      <S.ErrorMessage>{message}</S.ErrorMessage>
      <S.CloseButton type="button" aria-label="오류 메시지 닫기" onClick={onClose}>
        <S.Icon src={closeIcon} alt="" $size={18} />
      </S.CloseButton>
    </S.ErrorBanner>
  );
}