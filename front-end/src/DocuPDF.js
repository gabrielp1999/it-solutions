import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";

const DocuPDF = ({ user }) => {
  console.log(user);
  return (
    <Document>
      {user?.map((obj) => (
        <Page
          size="A4"
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              display: "flex",
              backgroundColor: "white",
              padding: 10,
            }}
          >
            <Text
              style={{
                color: "#000",
                fontSize: "15px",
                margin: "5px 0",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Relátorio do usuário
            </Text>
            <Text style={{ color: "#000", fontSize: "11px", margin: "5px 0" }}>
              Nome: {obj?.name} {"  "} Email: {obj?.email} {"  "} Usuário:{" "}
              {obj?.username}
            </Text>
            <Text style={{ color: "#000", fontSize: "11px", margin: "5px 0" }}>
              Celular: {obj?.phone}
            </Text>

            <Text style={{ color: "#000", fontSize: "11px", margin: "5px 0" }}>
              Endereço: {obj?.address.street} {"   "} Cep:{" "}
              {obj?.address.zipcode}
              {"  "} Numero: {obj?.address.suite} {"  "} Cidade:{" "}
              {obj?.address.city}
            </Text>
          </View>
        </Page>
      ))}
    </Document>
  );
};

export default DocuPDF;
