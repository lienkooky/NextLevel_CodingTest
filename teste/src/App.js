import React from 'react';
import styled from "styled-components"
import Navber from './View/Navber';
import MainSpot from './View/MainSpot';
import ItemList from './View/ItemList';

const Container = styled.div`
background-color: #121212;
`;

const Wrap = styled.div`
margin: 0 auto;
width: 1440px;
background-color: #121212;
`;

function App() {
  return (
    <Container>
      <Wrap>
        <Navber />
        <MainSpot />
        <ItemList />
      </Wrap>
    </Container>
  );
}

export default App;
