import { React, useState, useEffect, useRef } from 'react';
import './App.css';
import Image from './components/image';
import Clicker from './components/clicker';
import useMousePosition from './useMousePosition';
import Pokemon from './components/pokemon';

function App() {
  const [active, setActive] = useState();
  const { x, y } = useMousePosition();

  const [choice, setChoice] = useState('G');

  const [answer, setAnswer] = useState('');

  

  return (
    <div>
      <Clicker x={x} y={y} active={active} setActive={setActive} choice={choice} setChoice={setChoice} answer={answer} setAnswer={setAnswer}/>
      <Image active={active} setActive={setActive} answer={answer} setAnswer={setAnswer}/>
      
    </div>
  );
}

export default App;
