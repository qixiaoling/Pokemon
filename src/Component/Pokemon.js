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
        <>
        <h1>{pokemon.name}</h1>

        </>
    )





}
export default Pokemon