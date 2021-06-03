import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { startGetPokemons } from './redux/actions/pokemons';

function App(props) {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    if(pokemons.length === 0){
      // dispatch(fetchPokemons());
      // setPokemons([{}, {}]);

      dispatch(startGetPokemons());
      setPokemons([{}, {}]);

    }
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
