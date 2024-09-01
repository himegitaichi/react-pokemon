import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon } from './utils/pokemon';

function App() {
  const intialURL = "https://pokeapi.co/api/v2/pokemon"; //エンドポイントを追加
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全てのポケモンデータを取得
      let res = await getAllPokemon(intialURL);
      //各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      console.log(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  },[]);

  const loadPokemon = () => {};

  return (
    <div className="App">
      {loading ?(
        <h1>ロード中・・・</h1>
      ) : (
      <>
        <h1>ポケモンデータを取得しました</h1>
      </>
      )}
    </div>
  );
}

export default App;

//テスト2
