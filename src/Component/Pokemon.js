import React, {useState, useEffect} from 'react';
import axios from "axios";

function Pokemon({endPoint}){
    const [pokemon, setPokemon] = useState({});


    useEffect(()=>{
        async function getPokemon(){
            try{
                await axios.get(endPoint).then((res)=>{
                    console.log(res.data);
                    setPokemon(res.data)
                })

            }catch(e){
                console.error(e);
            }

        }

        getPokemon()
    },[])

    return(
        <section className="poke-card">
            {pokemon &&
            <>
                <h2>{pokemon.name}</h2>
                <img
                    alt="Afbeelding pokémon"
                    src={pokemon.sprites.front_default}
                />
                <p><strong>Moves: </strong>{pokemon.moves.length}</p>
                <p><strong>Weight: </strong>{pokemon.weight}</p>
                <p><strong>Abilities: </strong></p>
                <ul>
                    {pokemon.abilities.map((ability) => {
                        return (
                            <li key={`${ability.ability.name}-${pokemon.name}`}>
                                {ability.ability.name}
                            </li>
                        )
                    })}
                </ul>
            </>
            }
        </section>
    )





}
export default Pokemon