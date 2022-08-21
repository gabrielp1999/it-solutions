import * as S from "./styles";

const Switch = ({ togleMode }) => {
  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        name="switch"
        id="switch"
        onChange={() => togleMode()}
      />
    </S.Wrapper>
  );
};

export default Switch;
