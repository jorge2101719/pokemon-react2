import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './views/Home';
import Pokemones from './views/Pokemones';
import PokemonDetalle from './views/PokemonDetalle';
import NotFound from './views/NotFound'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <div className='mt-5'>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/pokemones' element={<Pokemones />} />
            <Route path='/pokemonDetalle/:name' element={<PokemonDetalle />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
