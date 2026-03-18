import { useState } from 'react';
import reactLogo from './assets/react.svg';
import heroImg from './assets/hero.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
  }
  function decrement() {
    setCount((count) => count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <>
      <section id='center'>
        <div className='hero'>
          <img src={heroImg} className='base' width='170' height='179' alt='' />
          <img src={reactLogo} className='framework' alt='React logo' />
        </div>
        <div className='counter'>Count is {count}</div>
        <div className='card'>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </section>

      <div className='ticks'></div>

      <div className='ticks'></div>
      <section id='spacer'></section>
    </>
  );
}

export default App;
