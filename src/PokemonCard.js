import React, {useState, useEffect} from 'react'
import axios from "axios";

function PokemonCard() {
    const [data, setData] = useState(null)

    useEffect(() => {

        async function getPokemon() {
            try {
                const result = await axios.get('https://pokeapi.co/api/v2/pokemon/jigglypuff')
                console.log(result.data)
                setData(result.data)

            } catch (error) {
                console.log(error)
            }
        }

        getPokemon()

    }, [])

    return (
        <>
            <div>
                <h1>Pokemon</h1>
            </div>
            <div>
                <button>previous</button>
                <button>next</button>
            </div>
            <div>
                {data ? (
                    <div>
                        <h1>{data.name}</h1>
                        <img src={data.sprites.front_default}/>
                    </div>
                ) : <h1>loading...</h1>}
            </div>
        </>

    );


}

export default PokemonCard