import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import logo from './assets/logo.png'
import Pokemon from "./Component/Pokemon";


function App() {

    const [pokemonList, setPokemonList] = useState([]);
    const [endPoint, setEndPoint] = useState('https://pokeapi.co/api/v2/pokemon');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        async function getPokemonList() {
            setLoading(true);
            setError(false);
            try {
                await axios.get(endPoint).then((res) => {
                    console.log(res.data)
                    setPokemonList(res.data);
                })
            } catch (e) {
                console.error(e);
                setError(true);
            }
            setLoading(false);

        }

        getPokemonList();

    }, [endPoint])


    return (
        <>
            <img src={logo} alt='logo' width='400px'/>
            <div>
                <button
                    onClick={() => setEndPoint(pokemonList.previous)}
                    disabled={!pokemonList.previous}
                >
                    Prev
                </button>
                <button
                    onClick={() => setEndPoint(pokemonList.next)}
                    disabled={!pokemonList.next}
                >
                    Next
                </button>
            </div>
            <div>
                {pokemonList.results && pokemonList.results.map((pokemon) => {
                    return (
                        <Pokemon key={pokemon.name} endPoint={pokemon.url}/>
                    )
                })}
            </div>
        </>

    );
}

export default App;