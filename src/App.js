import React, {useState, useEffect} from 'react';
import {Routes,Route,Link, BrowserRouter} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Allpost from './components/home/Allpost';
import AddPost from './components/home/AddPost';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="App">
     <div className="outer">
        <div className="inner">                      
        <Navbar  expand="md">
          <Navbar.Brand>Social Site from Lana and Jordan</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Link className="nav-link" to="/">Registration</Link>
          <Link className="nav-link" to="/home/Allpost">Allpost</Link>
          <Link className="nav-link" to="/home/AddPost">AddPost</Link>         
        </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Routes>
            <Route index element ={
               <Registration />
            }/>
            <Route path="/home/Allpost" element={
              <Allpost />
            }/>
             <Route path="/home/AddPost" element={
              <AddPost />
            }/>
            
          </Routes>
        </Container>
        </div>
        </div>
        </div>
        
    );

}
         
     

export default App;
