import React from 'react'
import './Concerto.css'
export default function Concerto() {
    return (
        <>
            <div className="cardServicos">
                {/* <div className="imagemCard">
                </div> */}
                    <img src="src/assets/concertandoCelular.jpg" alt="Imagem do Tecnico concertando o celular"  className="imagemCard"/>
                <div className="textosServicos">
                    <h1>Realizamos reparos em iphones e diversas marcas</h1>
                    <p>
                        *Manutenção especializada em diversas marcas de aparelho, consulte o modelo.
                    </p>
                    <a href='https://google.com'> Saiba mais →</a>
                </div>
            </div>
        </>
    )
}
