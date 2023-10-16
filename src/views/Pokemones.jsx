import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const [listaDatos, setListaDatos] = useState([]);

  const [name, setName] = useState(''); // declaración de estado name

  const navigate = useNavigate(); // utilización de useNavigate (punto 2)

  const url = 'https://pokeapi.co/api/v2/pokemon'; 

  // uso de asycn await y método fetch
  async function pokenames() {
    try{
      const res = await fetch(url);
      const data = await res.json();
      setListaDatos([...data.results]);
      } catch(error) {
        console.log(error);
    }
  }

  const buscarPokemon = () => {
    if(name) {
      navigate(`/pokemonDetalle/${name}`); // se redirecciona
    } else {
      navigate('/notFount');
    }
  }

  useEffect(() => {
    pokenames();
  }, [])

  const handleId = (e) => setName(e.target.value)

  return (
    <div className="mt-0 mb-3 pb-3 pt-3 detalles">
      <h1>Busca tu pokemón favorito</h1>
      <select
        className="mt-5 p-1"
        value={ name }
        onChange={ handleId }
      >
        <option value='dislable'>Seleccione un pokemón</option>
        {listaDatos.map((index, i) => <option key={i} value={index.name}>{index.name}</option>)}
      </select>
      <button onClick={ buscarPokemon } className="mt-5 text-bg-success">Ver Detalles</button>
    </div>
  )
  }

export default Pokemones
