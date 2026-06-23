import * as S from "./styles/Calculator.Styled.js";
import { buttons } from "./data/buttonData.js";

function App() {
  return (
    <S.Page>
      <S.CalculatorPanel>
        <S.Display>0</S.Display>

        <S.ButtonGrid>
          {buttons.map((button) => (
            <S.CalcButton
              key={button.label}
              type="button"
              $variant={button.variant}
              $span={button.span}
            >
              {button.label}
            </S.CalcButton>
          ))}
        </S.ButtonGrid>
      </S.CalculatorPanel>
    </S.Page>
  );
}

export default App;