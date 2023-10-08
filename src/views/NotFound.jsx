import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Image src='img/18.jpg' fluid />
          </Col>
          <Col>
            Al parecer se equivocó de nombre, o bien la ruta es errónea. Por favor, vuelva a intertarlo
          </Col>
        </Row>
        <Row>
          <Col><button onClick={() => navigate('/pokemones')} className='mt-5 bg-success text-white'>Volver</button></Col>
        </Row>
      </Container>
    </div>
  )
}
