import React,{useState} from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './NavBar.css';


const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Convert the search query to lowercase and trim whitespace
    const query = searchQuery.toLowerCase().trim();

    // Map of search terms to section IDs
    const sectionMap = {
      about: '#about',
      projects: '#projects',
    };

    // Check if the search query matches a key in the sectionMap
    if (sectionMap[query]) {
      // Scroll to the matched section
      document.querySelector(sectionMap[query]).scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      alert('Section not found!');
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link href="#" className='home'>Home</Nav.Link>
            <NavDropdown title="Dropdown" className='dropdown' id="basic-nav-dropdown">
              <NavDropdown.Item href="#"><Link to='projects'>Projects</Link></NavDropdown.Item>
              <NavDropdown.Item href="#"><Link to='about'>About</Link></NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form inline className="search" onSubmit={handleSubmit}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Button variant="outline-success" className="button" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
