import * as S from '../styles/Calculator.Styled';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButtons from './CalculatorButtons';

function Calculator() {
    return (
        <S.Page>
            <S.CalculatorPanel>
                <CalculatorDisplay />
                <CalculatorButtons />
            </S.CalculatorPanel>
        </S.Page>
    );
}

export default Calculator;