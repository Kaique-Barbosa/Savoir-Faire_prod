import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <footer className='footerContainer'>
        <div className="box1">
          <div className="boxTitulo">
            <h3>Savoir Faire</h3>
            <h3> | </h3>
            <h3>SF Imports</h3>
          </div>
          <div className="boxLinks">
            <a href="" className="links">Home</a>
            <a href="" className="links">Produtos</a>
            <a href="" className="links">Contato</a>
          </div>
        </div>
        <hr />
        <div className="boxhr">
          <div className="hrDireitos">
            <a href="http://" target="_blank" rel="" id='copyright'>
              <h3>Copright &#169; Savior Faire. Todos os direitos reservados</h3>
            </a>
            <a href="http://" target="_blank" rel="">
              <h3>Política de privacidade</h3>
            </a>
            <a href="http://" target="_blank" rel="">
              <h3>Termos de uso</h3>
            </a>
          </div>
          <div className="hrEsquerda">
            <div className="imgs">
              <a href='https://www.instagram.com/sfimports071/' target='_blank'><img src="src/components/footer/assets/instagram.png" alt="Intagram logo" /></a>
              <a href='https://api.whatsapp.com/send/?phone=5571996521651&text=Ol%C3%A1+Savoir+Faire%2C+necessito+tirar+uma+duvida.&type=phone_number&app_absent=0' target='_blank'><img src="src/components/footer/assets/whatsapp.png" alt="Watsapp logo" /></a>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer