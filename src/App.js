import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import logo from './assets/logo.png'
import Pokemon from "./Component/Pokemon";
import Button from "./Component/Button";


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
        <div className="poke-deck">
            {pokemonList &&
            <>
                <img alt="logo" width="400px" src={logo} />
                <section className="button-bar">
                    <Button
                        disabled={!pokemonList.previous}
                        clickHandler={() => setEndPoint(pokemonList.previous)}
                    >
                        Vorige
                    </Button>
                    <Button
                        disabled={!pokemonList.next}
                        clickHandler={() => setEndPoint(pokemonList.next)}
                    >
                        Volgende
                    </Button>
                </section>

                {pokemonList.results && pokemonList.results.map((pokemon) => {
                    return <Pokemon key={pokemon.name} endPoint={pokemon.url} />
                })}
            </>
            }
            {loading && <p>Loading...</p>}
            {error && <p>Er ging iets mis bij het ophalen van de data...</p>}
        </div>
    )
}

            export default App