import * as S from "./styles/Calculator.Styled";

function App() {
  return (
    <S.Page>
      <S.CalculatorPanel>
        <S.Display>0</S.Display>

        <S.ButtonGrid>
          <S.TemporaryButton>AC</S.TemporaryButton>
          <S.TemporaryButton>÷</S.TemporaryButton>

          <S.TemporaryButton>7</S.TemporaryButton>
          <S.TemporaryButton>8</S.TemporaryButton>
          <S.TemporaryButton>9</S.TemporaryButton>
          <S.TemporaryButton>×</S.TemporaryButton>

          <S.TemporaryButton>4</S.TemporaryButton>
          <S.TemporaryButton>5</S.TemporaryButton>
          <S.TemporaryButton>6</S.TemporaryButton>
          <S.TemporaryButton>-</S.TemporaryButton>

          <S.TemporaryButton>1</S.TemporaryButton>
          <S.TemporaryButton>2</S.TemporaryButton>
          <S.TemporaryButton>3</S.TemporaryButton>
          <S.TemporaryButton>+</S.TemporaryButton>

          <S.TemporaryButton>0</S.TemporaryButton>
          <S.TemporaryButton>.</S.TemporaryButton>
          <S.TemporaryButton>=</S.TemporaryButton>
        </S.ButtonGrid>
      </S.CalculatorPanel>
    </S.Page>
  );
}

export default App;