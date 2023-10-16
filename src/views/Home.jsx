import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const Home = () => {
  return (
    <div className="mt-3 pt-3">
      <h1>Bienvenido maestro pokemón</h1>
      <Container>
        <Image src='/img/Pokemon-3.jpg' alt='imagen' fluid />
      </Container>
    </div>
  )
}

export default Home