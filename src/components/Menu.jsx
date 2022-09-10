import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import Logo from '../images/logoOne.png';

const Menu = () => {
  const [scroll, setScroll] = useState(false);
  const [expanded, setExpanded] = useState(false);

   useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);


  return (
    <div id='Menu'>
      <Navbar expand="lg" expanded={expanded}>
        <Container>
          <div className='resp-logo'>
          <a href="/">
            <img src={Logo} alt="logo-responsive" />
            </a>
          </div>
        <Navbar.Toggle aria-controls='responsive-na' onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse>
          <Nav onClick={() => setExpanded(false)}>
          <NavLink  to="/">Home</NavLink>
          <NavLink to="/gamecontent">Game Content</NavLink>
          <NavLink to="/rosters">Team Rosters</NavLink>
          <NavLink to="/coaches">Coaches</NavLink>
          <NavLink to="/photogallery">Photo Gallery</NavLink>
          <NavLink to="/gameinfo">Gameday Information</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
</div>
  )
}

export default Menu