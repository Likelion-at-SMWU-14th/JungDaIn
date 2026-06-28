import * as S from '../styles/Calculator.Styled';

function ClacButton({ label, variant, span }) {
    return (
        <S.CalcButton
            type="button"
            $variant={variant}
            $span={span}
        >
            {label}
        </S.CalcButton>
    );
}

export default ClacButton;