/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Cards.css'
import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card,
    CardBody,
    CardTitle,
    // CardSubtitle,
    CardLink,
    // CardText,
    CardGroup,

} from 'reactstrap';
import { Title } from '@mui/icons-material';

function Cards(props) {

    
    const [link, setLink] = useState(props.link);
    const [title, settitle] = useState(props.titulo);

    //   const [screenSize, setScreenSize] = useState(window.innerWidth);
    //   useEffect(() => {
    //     const handleResize = () => {
    //       setScreenSize(window.innerWidth);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //       window.removeEventListener('resize', handleResize);
    //     };
    //   }, []);

    return (
        <>
            <h1 className="tituloIphone">Garanta seu IPhone</h1>
            <CardGroup className="CardContainer" >
                <Card className='CardBox' id='card1' >
                    <div className='boxTitleLink'>
                        <CardTitle tag="h5" className='cardTitulo'>
                            {title[0]}
                        </CardTitle>
                        <CardLink href={link[0]} target='_blank' className='cardLink'>
                            Comprar agora
                        </CardLink>
                    </div>

                    <img
                        alt="Card cap"

                        // src="src/components/cards/assets/img2.jpg"
                        src="src/components/cards/assets/iphone3.png"
                    />

                </Card>
                {/*  ------------------------ */}
                <Card className='CardBox' id='card2'>
                    <CardBody className='CardBody'>
                        <div className='TituloLink'>
                            <CardTitle tag="h5" className='cardTitulo'>
                            {title[1]}
                            </CardTitle>
                            <CardLink href={link[1]} target='_blank' className='cardLink'>
                                Comprar agora
                            </CardLink>
                        </div>
                    </CardBody>
                    <img
                        alt="Card cap"
                        src="https://http2.mlstatic.com/D_NQ_NP_695863-MLA32646836777_102019-O.webp"
                    />

                </Card>
                {/*  ------------------------ */}
                <Card className='CardBox' id='card3'>
                    <CardBody className='CardBody'>
                        <div className='TituloLink'>
                            <CardTitle tag="h5" className='cardTitulo'>
                            {title[2]}
                            </CardTitle>
                            <CardLink href={link[2]} target='_blank' className='cardLink'>
                                Comprar agora
                            </CardLink>
                        </div>
                    </CardBody>
                    <img
                        alt="Card cap"
                        src="https://http2.mlstatic.com/D_NQ_NP_695863-MLA32646836777_102019-O.webp"
                    />

                </Card>



            </CardGroup>

        </>
    )
}

export default Cards