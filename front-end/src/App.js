import React, { useState } from "react";

import Table from "./Components/Table";
import Header from "./Components/Header";
import * as S from "./stylesApp";
import "./App.css";

function App() {
  document.title = "It Solutions";
  const [dark, setDark] = useState(false);
  const togleMode = () => {
    setDark(!dark);
  };

  return (
    <S.Wrapper dark={dark}>
      <Header dark={dark} togleMode={togleMode} />
      <h1>Lista de Usuários</h1>
      <Table dark={dark} />
    </S.Wrapper>
  );
}

export default App;
