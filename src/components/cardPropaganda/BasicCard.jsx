import * as React from 'react';
import './BasicCard.css'

import defaultImagem1 from './assets/icons/imagem1.png'
import defaultImagem2 from './assets/icons/imagem2.png'
import defaultImagem3 from './assets/icons/imagem3.png'
import defaultImagem4 from './assets/icons/imagem4.png'

export default function BasicCard(props) {

  const {
    // as imagens são definidas como padrao, mas pode chamar as constantes
    // ao decarar o componente para alterar as imagens
    // ex imagem1= {'../caminhoimagem/'}

    imagem1 = props.propImagem1,
    imagem2 = props.propImagem2,
    imagem3 = props.propImagem4,
    imagem4 = props.propImagem3,
    titulo = ['', '', '', ''],
    subtitulo = ['', '', '', ''],
    criarLink = false,
    links = ['#','#','#','#'],
  } = props;



  return (
    <>
      <div className="cardBox">
        <div className="cards" id='cardAgilidade'>
          {criarLink ?
            <a href={links[0]}  target='_blank'>
              <img src={imagem1} />
              <h1>{titulo[0]}</h1>
              <h2>{subtitulo[0]}</h2>
            </a>
            :
            <>
              <img src={imagem1} />
              <h1>{titulo[0]}</h1>
              <h2>{subtitulo[0]}</h2>
            </>
          }

        </div>
        <div className="cards" id='cardCB'>
          {criarLink ?
            <a href={links[1]} target='_blank'>
              <img src={imagem2} />
              <h1>{titulo[1]}</h1>
              <h2>{subtitulo[1]}</h2>
            </a>
            :
            <>
              <img src={imagem2} />
              <h1>{titulo[1]}</h1>
              <h2>{subtitulo[1]}</h2>
            </>
          }
        </div>

        <div className="cards" id='cardSeguranca'>
          {criarLink ?
            <a href={links[2]} target='_blank'>
              <img src={imagem3} />
              <h1>{titulo[2]}</h1>
              <h2>{subtitulo[2]}</h2>
            </a>
            :
            <>
              <img src={imagem3} />
              <h1>{titulo[2]}</h1>
              <h2>{subtitulo[2]}</h2>
            </>
          }
        </div>

        <div className="cards" id='cardAtedimento'>

          {criarLink ?
            <a href={links[3]} target='_blank'>
              <img src={imagem4} />
              <h1>{titulo[3]}</h1>
              <h2>{subtitulo[3]}</h2>

            </a>
            :
            <>
              <img src={imagem4} />
              <h1>{titulo[3]}</h1>
              <h2>{subtitulo[3]}</h2>
            </>
          }
        </div>
      </div>
    </>
  );
}
