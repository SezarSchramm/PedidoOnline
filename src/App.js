import React, { useState } from 'react';

import './App.css';
import next from './assets/next.svg'
import previous from './assets/previous.svg'
import img from './assets/IMG_4866.jpg'

function App() {
  const [count, setCount] = useState(0)

  const [buttonPosition, setButtonPosition]: any = useState({
    left: '52%',
    top: '42%',
  });

  function handleNext() {
    if (count >= 3) {
      return
    }
    setCount(count + 1)
    console.log(count)
  }

  function handlePrevious() {
    if (count === 0) {
      return
    }
    setCount(count - 1)
    console.log(count)
  }

  function yesClick() {
    setCount(count + 1)
  }

  const handleMouseOver = () => {
    const maxWidth = window.innerWidth - 100; // Largura máxima - largura do botão
    const maxHeight = window.innerHeight - 40; // Altura máxima - altura do botão

    const randomLeft = Math.floor(Math.random() * maxWidth)
    const randomTop = Math.floor(Math.random() * maxHeight)
    console.log(randomLeft)

    setButtonPosition({
      left: randomLeft,
      top: randomTop,
    });
  };

  console.log(buttonPosition.left)
  return (
    <div className="app">

      {count === 0 && <p> Oii meu bbzinho !! Hoje completa 1 mês que você entrou na minha vida e nessa<br></br> data eu gostaria de lhe pedir uma coisa.</p>}
      {count === 1 && <p>Mas antes, eu gostaria de falar que amei te conhecer a partir do primeiro dia <br></br> do cinema e desde então, venho me apaixonando mais e mais por você!</p>}
      {count === 2 && <p>Eu sei que isso pode parecer um pouco "cafona" mas eu queria fazer isso de uma <br></br> forma diferente e legal ( no meu ver rsrs).</p>}
      {count === 3 && <>
        <p>Você gostaria de namorar comigo ?</p>
        <button className='btn-yes' onClick={yesClick}>Sim</button>
        <button onMouseOver={handleMouseOver} style={{ left: buttonPosition.left, top: buttonPosition.top }} className='btn-no'>Não</button>
      </>
      }
      {count === 4 && <img className='img-final' src={img} alt='imagem'></img>}


      <img onClick={handleNext} className='next-btn' src={next} alt='next'></img>
      <img onClick={handlePrevious} className='previous-btn' src={previous} alt='previous'></img>
    </div>
  );
}

export default App;
