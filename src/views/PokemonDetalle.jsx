import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // importación de useParams
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import { CardBody, CardText, CardTitle, ListGroup, ListGroupItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import '../App.css';

export default function pokemonDetalle () {
  const { name } = useParams(); // se utiliza useParams (punto 3)

  const [pokemon, setPokemon] = useState({}); // declaración de estado que recibirá la información

  const navigate = useNavigate();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`; // url con variable rescatada de useParams

  async function datosPokemom() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const numero = data.id;
      const experiencia = data.base_experience;
      const imagen = data.sprites.other.dream_world.front_default;
      const stats = data.stats.map(index => ({
        nombre: index.stat.name,
        base: index.base_stat,
      })
    );
    const type = data.types.map(index => index.type.name )

    setPokemon({ name, numero, experiencia, stats, type, imagen }); // actualización del estado
  } catch(error) {
    console.log(error)
  }}

  useEffect(() => {
    datosPokemom()
  }, [name]);

  return (
    <div className='mt-5 pt-5 detalles'>
      {pokemon ? 
        <Container>
          <Row>
            <Col>
              <Image src={pokemon.imagen} fluid style={{width: '25rem'}} />
            </Col>
            <Col>
              <Card style={{width : '20rem'}}>
                <CardBody className='align-text-start'>
                  <CardTitle>Nombre: {name}</CardTitle>
                  <CardText>Id: {pokemon.numero}</CardText>
                  <CardText>Experiencia: {pokemon.experiencia}</CardText>
                  <CardText>Tipo: {pokemon.type}</CardText>
                  <ListGroup>
                  {pokemon.stats?.map((index, i) => (
                    <ListGroupItem key={i}>
                      {index.nombre}: {index.base}
                    </ListGroupItem>
                  ))}
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container> : 'cargando...'
      }
      <button className="bg-success text-white" onClick={() => navigate('/pokemones')}>Volver</button>
    </div>
  )
}
