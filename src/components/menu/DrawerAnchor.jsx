import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import ButtonGroup from '@mui/joy/ButtonGroup';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import './DrawerAnchor.css'
import { animateScroll as scroll } from 'react-scroll';

function scrollToTop() {
  scroll.scrollToTop({
      duration: 500,  // duração da animação em milissegundos
      smooth: 'easeInOutQuart'  // curva de animação (opcional)
  });
}

// react router dom, e react link scrll, verificar como usa
// usar  React Component Refs:

// const OutroComponente = () => {
//   const scrollToSection = () => {
//       const minhaSecao = document.getElementById('minha-secao');
//       if (minhaSecao) {
//           minhaSecao.scrollIntoView({ behavior: 'smooth' });
//       }
//   };

const links = [
  '/home',
  '/iphones',
  '/assistencia-tecnica',
  '/contato'
];

export default function DrawerAnchor() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box className='boxPrincipal'
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='boxList'>
        {['Home', 'IPhones', 'Assistencia Técnica', 'Contato'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <a href={links[index]} className='Taglinks'>
                {text}
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text) => (
          <ListItem key={text}>
            <ListItemButton>{text}</ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <>
      <ButtonGroup variant="soft">

        {/* <Button key={'right'} onClick={toggleDrawer('right', true)}>
            {'right'}
          </Button> */}
        <button className='btnMenu'>
          <img src="src/components/menu/assets/retangulos-de-menu.png" alt="" key={'right'} onClick={toggleDrawer('right', true)} />
        </button>
      </ButtonGroup>

      <Drawer className='drawerBox'
        key={'right'}
        //   anchor={anchor}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        anchor="right"
        color="neutral"
        //   invertedColors={false}
        size="sm"
        variant="soft"
      >
        {list('right')}
      </Drawer>

    </>
  );
}
