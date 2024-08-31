import { useEffect } from 'react';
import './App.css';
import { getAllPokemon } from './utils/pokemon';

function App() {
  const intialURL = "https://pokeapi.co/api/v2/pokemon" //エンドポイントを追加

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全てのポケモンデータを取得
      let res = await getAllPokemon(intialURL);
      console.log(res);
    };
    fetchPokemonData();
  },[]);

  return (
    <div className="App">
    </div>
  );
}

export default App;
