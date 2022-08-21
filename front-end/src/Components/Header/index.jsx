import * as S from "./styles";
import Switch from "../Switch";

const Header = ({ togleMode }) => {
  return (
    <S.Wrapper>
      <Switch togleMode={togleMode} />
    </S.Wrapper>
  );
};

export default Header;
