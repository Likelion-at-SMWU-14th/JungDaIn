import * as S from '../styles/Calculator.Styled';
import { buttons } from '../data/buttonData';
import CalcButton from './ClacButton';

function CalculatorButtons() {
    return (
        <S.ButtonGrid>
            {buttons.map((button) => (
                <CalcButton
                    key={button.label}
                    label={button.label}
                    variant={button.variant}
                    span={button.span}
                />
            ))}
        </S.ButtonGrid>
    );
}

export default CalculatorButtons;