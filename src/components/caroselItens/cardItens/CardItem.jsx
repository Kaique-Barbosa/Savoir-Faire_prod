import React from 'react'
import './CardItem.css'
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
  } from 'reactstrap';

export const CardItem = ({titulo, imagem, gb, preco}) => {
  return (
    <div>
        <Card className='cardContainer' >
            <CardImg className='cardImg'
                alt="Card image cap"
                src={imagem}
                top
              
            />
            <CardBody className='cardBody'>
                <Button className='cardButtom'>
                    Comprar
                </Button>
                {/* <CardTitle tag="h5" className='cardTitulo'>
                    {titulo}
                </CardTitle> */}
                <CardTitle className="mb-2 cardTitulo">
                    {titulo} {gb} GB
                </CardTitle>
                <CardSubtitle className='subtitulo'>
                 R${preco}
                </CardSubtitle>
            </CardBody>
        </Card>

    </div>
  )
}
