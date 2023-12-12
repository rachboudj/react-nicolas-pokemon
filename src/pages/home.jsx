import { useState } from "react";

function Home() {
    const [pokemonData, setPokemonData] = useState(null);
    const [searchId, setSearchId] = useState('');

    const handleSearch = () => {
        // fetch('http://localhost:3001/pokemons/${searchId}')
        console.log(searchId)
    }

    return (
        <div className="App">
            <h1 className="text-3xl font-bold underline">L'Home</h1>
            <input 
            type="text" 
            placeholder="id du pokemon"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            />

            <button
                onClick={handleSearch}
                >
                    Rechercher
            </button>
        </div>
        
    );
}

export default Home;