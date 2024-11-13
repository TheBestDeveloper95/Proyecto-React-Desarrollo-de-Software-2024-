import Container from "react-bootstrap/esm/Container"
import Navbar from "react-bootstrap/esm/Navbar"


export const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Carga De Productos</Navbar.Brand>
    </Container>
  </Navbar>
  );
};
