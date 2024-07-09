import React from "react";
import "./Divulgacoes.css";
import Moldal from "../moldal/Moldal.jsx";

import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";

function Divulgacoes() {
  const [variant, setVariant] = React.useState(undefined);

  return (
    <div className="containerDivulgacoes">
      <Button
        variant="soft"
        color="neutral"
        onClick={() => {
          setVariant("soft");
        } } className="botaoMoldal"
      >
        <div className="boxConteudos">
          <img
            src="https://goglassbrasil.com/cdn/shop/files/imagem_2023-03-27_161012381.png?v=1679944214&width=1500"
            alt="imagem de blindagem"
          />

          <div className="textos">
            <h2>Porque blindar meu celular?</h2>
          </div>
        </div>
      </Button>

      <Modal open={!!variant} onClose={() => setVariant(undefined)}>
        <ModalDialog variant={variant}>
          <ModalClose />
          <DialogTitle>Explicação</DialogTitle>
          <DialogContent>
            <p>
              A blindagem oferece 10 x mais resistencia que peliculas comuns,
              sendo mais resistentes a inpactos e arranhões. O corte é preciso
              de acordo com o modelo do seu aparelho, abrangendo maior area da
              tela protegendo as laterais e cantos.
            </p>
          </DialogContent>
        </ModalDialog>
      </Modal>
    </div>
  );
}

export default Divulgacoes;
