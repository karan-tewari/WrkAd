import React from 'react';
import './App.css';

import {Routes, Route, BrowserRouter, Link} from 'react-router-dom'
import {Nav, Navbar, NavDropdown,Form, FormControl, Button } from 'react-bootstrap'

import Home from './components/Home/home';
import Description from './components/Description/description';
import FoodIndex from './components/FoodIndex/foodindex';
import FoodDescription from './components/FoodDescription/fooddescription';

function App() {
  return (
    <BrowserRouter>
<Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/">Home Page</Link></Nav.Link>
      <Nav.Link> <Link to="/description">Food Listing</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
          {/* <Link to="/">Home</Link>
          <Link to="/description">Desc</Link> */}
        
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/description" element={<Description />}>
          <Route path="/" element={<FoodIndex />} />
          <Route path=":slug" element={<FoodDescription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
