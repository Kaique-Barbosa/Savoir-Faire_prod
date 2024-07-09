// import { useState } from 'react'
// import React from 'react'
import Navbar from "./components/navbar/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrocel from "./components/carrocel/Carrocel.jsx";
import Cards from "./components/cards/Cards.jsx";
import CarrocelItens from "./components/caroselItens/CarrocelItens.jsx";
import BasicCard from "./components/cardPropaganda/BasicCard.jsx";
import ConcertoPropaganda from "./components/propagandaConcerto/Concerto.jsx";
import Divulgacoes from "./components/divulgacoes/Divulgacoes.jsx"
import "./index.css";
import "./App.css";
// import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Carrocel />
      <Cards
        titulo={["IPhones", "IPhone ", "IPhone "]}
        link={[
          "http://google.com",
          "http://instagram.com",
          "http://pixbet.com",
        ]}
      />

      <CarrocelItens />
      <BasicCard
        titulo={["Agilidade", "Custo beneficio", "Segurança", "Pós venda"]}
        subtitulo={[
          "O menor prazo possível",
          "Serviço de excelência",
          "Política de proteção aos seus dados",
          "Time de atendimento dispostos a ajudar",
        ]}
        propImagem1={"src/components/cardPropaganda/assets/icons/imagem1.png"}
        propImagem2={"src/components/cardPropaganda/assets/icons/imagem2.png"}
        propImagem3={"src/components/cardPropaganda/assets/icons/imagem3.png"}
        propImagem4={"src/components/cardPropaganda/assets/icons/imagem4.png"}
      />
      <ConcertoPropaganda
        titulo={["Agilidade", "Custo beneficio", "Segurança", "Pós venda"]}
      />

      {/* <BasicCard 
      criarLink= {true}
      
        links={
          [
            '#',
            '#',
            '#',
            '#'
          ]}
          propImagem1 ={'src/assets/blindagemImg.webp'}
          propImagem2 ={''}
          propImagem3 ={''}
          propImagem4 ={''}
      /> */}
      <Divulgacoes/>
      <Footer />
    </>
  );
}

export default App;
