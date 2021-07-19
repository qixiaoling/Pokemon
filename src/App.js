import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import logo from './assets/logo.png'
import Pokemon from "./Component/Pokemon";

function App() {

    const [pokemonList, setPokemonList] = useState([]);
    const [endPoint, setEndPoint] = useState('https://pokeapi.co/api/v2/pokemon');

    useEffect(() => {

        async function getPokemonList() {

            try {
                await axios.get(endPoint).then((res) => {
                    console.log(res.data)
                    setPokemonList(res.data.results);
                })
            } catch (e) {
                console.error(e);
            }

        }

        getPokemonList();

    }, [])


    return (
        <>
            <img src={logo} alt='logo' width='400px'/>
            <div>
                <button
                    onClick={() => setEndPoint(pokemonList.previous)}
                >
                    Prev
                </button>
                <button
                    onClick={() => setEndPoint(pokemonList.next)}
                >
                    Next
                </button>
            </div>
            <div>
                {pokemonList.result && pokemonList.map((pokemon) => {
                    return (
                        <Pokemon key={pokemon.name} endPoint={pokemon.url}/>
                    )
                })}
            </div>
        </>

    );
}

export default App;