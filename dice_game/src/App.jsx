import styled from "styled-components";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { useState } from "react";


function App() {
  const[isGameStarted, setIsGameStarted] = useState(false);

  const toggeleGamePlay = ()=>{
    setIsGameStarted(prev => !prev);
  }

  return <>
  {isGameStarted ? <GamePlay/> : <StartGame toggle= {toggeleGamePlay}/>}
  </>
}

export default App;

const Button = styled.button`
background-color: black;
color: white;
padding: 10px;
`;