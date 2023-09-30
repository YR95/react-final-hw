import React, { useState } from 'react';
// import { Continents } from './pages/continents';
import './styled.js';
import {
  FooterGrid, HeaderGrid, Item, LogoText, MainGrid, MainWrapp, SideBarGrid,
} from './styled.js';
import ButtonAppBar from './components/SideBar/SideBar';
import ListDividers from './components/SideBar/SideBar';
import FooterItem from './components/Footer/FooterItem';
import Quizes from './pages/quizes/Quiz';
import ChatRoom from './components/ClassComponent/ChatRoom.js';
import ButtonAge from './components/ClassComponent/ButtonAge';

class Greeting extends React.Component<{ name: string }> {
  render () {
    return <h1>Welcome, {this.props.name}, on our quiz page!</h1>;
  }
}
class IntroText extends React.Component<{ name: string }> {
  render () {
    return <h2>{this.props.name}</h2>;
  }
}

function App () {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <MainWrapp container>
      <HeaderGrid item xs={12} lg={12}>
      <Item>
        <LogoText variant="h1" component="h2">Quiz Time</LogoText>
        <LogoText variant="h3" component="h2">Boost yourself</LogoText>



      </Item>

    </HeaderGrid>
  <SideBarGrid item xs={1} lg={3}>
    <Greeting name="everyone"/>
    <IntroText name="click your age"/>
    <ButtonAge/>

    <Item><ListDividers/></Item>

  </SideBarGrid>;
  <MainGrid item xs={11} lg={9}>
    <Item>
      <Quizes/>
    </Item>
  </MainGrid>;

  <FooterGrid item xs={12} lg={12}>
    <Item>
      <>
        <label>
          Choose the chat room for a quiz:{' '}
          <select
            value={roomId}
            onChange={e => setRoomId(e.target.value)}
          >
            <option value="java">JAVA</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
          </select>
        </label>
        <button onClick={() => setShow(!show)}>
          {show ? 'Close chat' : 'Open chat'}
        </button>
        {show && <hr/>}
        {show && <ChatRoom roomId={roomId}/>}
      </>
    </Item>
    <Item><FooterItem/></Item>
  </FooterGrid>;
</MainWrapp>
)
  ;
}

export default App;