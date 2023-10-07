import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const [listaDatos, setListaDatos] = useState([]);

  const [name, setName] = useState(''); // declaración de estado name

  const navigate = useNavigate(); // utilización de useNavigate (punto 2)

  const url = 'https://pokeapi.co/api/v2/pokemon'; 

  // uso de asycn await y método fetch
  async function pokenames() {
    const res = await fetch(url);
    const data = await res.json();
    setListaDatos([...data.results]);
  }

  const buscarPokemon = () => {
    if(name) {
      navigate(`/pokemonDetalle/${name}`); // se redirecciona
    } else {
      alert('Seleecione una opción')
    }
  }

  useEffect(() => {
    pokenames();
  }, [])

  const handleId = (e) => setName(e.target.value)

  return (
    <div className="mt-5 pt-3 detalles">
      <h1>Busca tu pokemón favorito</h1>
      <select
        className="mt-5 p-1"
        value={ name }
        onChange={ handleId }
      >
        <option value='dislable'>Seleccione un pokemón</option>
        {listaDatos.map((index, i) => <option key={i} value={index.name}>{index.name}</option>)}
      </select>
      <button onClick={ buscarPokemon } className="mt-5 text-bg-success">Ver Deatalles</button>
    </div>
  )
  }

export default Pokemones
