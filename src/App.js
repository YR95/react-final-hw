import React from 'react';
// import { Continents } from './pages/continents';
import './styled.js';
import {
  FooterGrid, HeaderGrid, Item, LogoText, MainGrid, MainWrapp, SideBarGrid,
} from './styled.js';
import ButtonAppBar from './components/SideBar/SideBar';
import ListDividers from './components/SideBar/SideBar';
import FooterItem from './components/Footer/FooterItem';

function App() {
  return (
    <MainWrapp container>
      <HeaderGrid item xs={12} lg={12}>
        <Item>
          <LogoText variant="h1" component="h2">Quiz Time</LogoText>
          <LogoText variant="h3" component="h2">Boost yourself</LogoText>
        </Item>
      </HeaderGrid>
      <SideBarGrid item xs={1} lg={3}>
        <Item><ListDividers/></Item>

      </SideBarGrid>
      <MainGrid item  xs={11} lg={9}>
        {/*<Item>*/}
        {/*  <Continents />*/}
        {/*</Item>*/}
      </MainGrid>
      <FooterGrid item xs={12} lg={12}>
        <Item><FooterItem/></Item>
      </FooterGrid>
    </MainWrapp>
  );
}

export default App;