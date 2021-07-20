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
    },[endPoint])

    return(
        <section className="poke-card">
            {pokemon &&
            <>
                <h2>{pokemon.name}</h2>
                <p><strong>Weight: </strong>{pokemon.weight}</p>

            </>
            }
        </section>
    )





}
export default Pokemon