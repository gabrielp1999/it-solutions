import React, { useEffect, useState } from "react";
import * as S from "./styles";
import useDetailsPerson from "../../hooks/useDetailsPerson";
import usePerson from "../../hooks/usePerson";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DocuPDF from "../../DocuPDF";

const Table = ({ dark }) => {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [userSelected, setUserSelected] = useState([]);
  const usersApi = usePerson();
  const allUsersApi = useDetailsPerson();
  const [desabledButton, setDesabledButton] = useState(0);

  useEffect(() => {
    allUsersApi.getDetailsUsers().then((data) => {
      setAllUsers(data);
    });
    usersApi.getUsers().then((data, index) => {
      setUsers(data);
    });
  }, []);

  const imprimirPdf = (id) => {
    const filterUser = allUsers.filter((user) => {
      return user.id === id ? true : false;
    });
    setDesabledButton(id);
    setUserSelected(filterUser);
  };

  return (
    <S.Wrapper dark={dark}>
      <S.Box>
        <S.Table dark={dark} className="headerTable borderLeft borderRight">
          <S.Row className="headerTable borderLeft borderRight ">
            <S.Coll className="headerTable borderLeft">
              <S.Title>Id</S.Title>
            </S.Coll>
            <S.Coll>
              <S.Title>Nome</S.Title>
            </S.Coll>
            <S.Coll>
              <S.Title>Usuário</S.Title>
            </S.Coll>
            <S.Coll>
              <S.Title>Email</S.Title>
            </S.Coll>
            <S.Coll className="headerTable borderRight">
              <S.Title>Imprimir Relatório</S.Title>
            </S.Coll>
          </S.Row>

          {users?.map((user, index) => (
            <S.Row key={user.id} className="borderLeft borderRight">
              <S.Coll
                className={
                  index === 4
                    ? "borderBottom borderLeft color"
                    : "borderLeft color"
                }
              >
                <S.Text>{user.id}</S.Text>
              </S.Coll>
              <S.Coll className={index === 4 ? "borderBottom color" : "color"}>
                <S.Text>{user.name}</S.Text>
              </S.Coll>
              <S.Coll className={index === 4 ? "borderBottom color" : "color"}>
                <S.Text>{user.username}</S.Text>
              </S.Coll>
              <S.Coll className={index === 4 ? "borderBottom color" : "color"}>
                <S.Text>{user.email}</S.Text>
              </S.Coll>
              <S.Coll
                className={
                  index === users?.length - 1
                    ? "borderBottom borderRight"
                    : "borderRight"
                }
              >
                <S.Button dark={dark} onClick={() => imprimirPdf(user.id)}>
                  Selecionar
                </S.Button>
                <PDFDownloadLink
                  document={<DocuPDF user={userSelected} />}
                  fileName="Relátorio"
                >
                  <S.Button
                    className={user.id === desabledButton ? "red" : ""}
                    disabled={user.id === desabledButton ? false : true}
                  >
                    Baixar
                  </S.Button>
                </PDFDownloadLink>
              </S.Coll>
            </S.Row>
          ))}
        </S.Table>
      </S.Box>
    </S.Wrapper>
  );
};

export default Table;
