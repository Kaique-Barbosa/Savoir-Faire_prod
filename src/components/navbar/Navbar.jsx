import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import UserIcon from '@mui/icons-material/AccountCircle';
import { Badge } from '@mui/base/Badge';
import CartComprasIcon from '@mui/icons-material/ShoppingCart';
import { Input } from '@mui/base/Input';

import './Navbar.css'
import DrawerAnchor from '../menu/DrawerAnchor.jsx';

export default function Navbar() {
  return (
    <>
   <nav className='NavContainer'>
        <div className='TitleBox'>
            <h1>Savoir Faire</h1>
        </div>
        {/* <div className='LinksBox'>
            <Stack direction="row" spacing={3} >
                <Button href="https://google.com" target='_blank' className='LinkNavButton'>Home</Button>
                <Button href="https://google.com" target='_blank' className='LinkNavButton'>Produto</Button>
                <Button href="https://google.com" target='_blank' className='LinkNavButton'>Contato</Button>
            </Stack>
        </div> */}
        <div className="icons">
            {/* <Input
              slotProps={{ input: { className: 'CustomInputIntroduction' } }}
              aria-label="Campo de pesquisa"
              placeholder="digite o produto"
              
          /> */}
          <a href="https://google.com" target='_blank'>
            <UserIcon className='userIcone'/>
          </a>

          <a href="https://google.com" target='_blank'>
              <Badge
                slotProps={{
                  root: { className: 'CustomBadgeIntroduction' },
                  badge: { className: 'CustomBadgeIntroduction--badge'},
                }}
                badgeContent={"9+"}//alterar para int
              
              >
                <span className="CustomBadgeIntroduction--content">
                  <CartComprasIcon id='CartComprasIcon' sx={{ color: '#212121' }}/>
                </span> 
                </Badge>
          </a>
          
          <DrawerAnchor /> 
        </div>
   </nav>
    </>
  )


  // alterar futuramente se for usar o dark Mode
  // function useIsDarkMode() {
  //   const theme = useTheme();
  //   return theme.palette.mode === 'dark';
  // }
  

}
