import React, {useEffect, useState} from 'react';
import styled from "styled-components"
import Navber from './View/Navber';
import MainSpot from './View/MainSpot';
import ItemList from './View/ItemList';
import axios from "axios"

const Container = styled.div`
background-color: #121212;
`;

const Wrap = styled.div`
margin: 0 auto;
width: 1440px;

background-color: #121212;
`;

function App() {

  const [ContentsData, setContentsData] = useState([])

  useEffect(() => {
    Contents()
  }, [])

  // contentData 뽑기
  const Contents = () => {
    axios.get("http://192.168.0.133:1338/v1/test/contents").then((res) => setContentsData(res.data.data))
  }
  
  return (
    <Container>
      <Wrap>
        <Navber />
        <MainSpot />
        <ItemList ContentsData={ContentsData} />
      </Wrap>
    </Container>
  );
}

export default App;
