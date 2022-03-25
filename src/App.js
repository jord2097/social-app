import React, {useEffect, useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './App.css';
import View from './view';
import Add from './Add';
import Postcard from './postcard';


function App(){
    const [posts, changePosts] = useState([])  

    const updateList = (postID, userName, postMsg, img, likes)=>{
      const listItem = {postID, userName, postMsg, img, likes}      
      localStorage.setItem("list", JSON.stringify([...posts, listItem]))
      changePosts((prevState)=> [...prevState, listItem])      
    }     

    useEffect(() => {      
      const listContents = localStorage.getItem("list")      
      changePosts(JSON.parse(listContents)||[])
    }, [])    
    
    
    const changeLikes = (id) => changePosts((posts) => posts.map((post) => {
      if (post.postID != id) return post;
      return {...post, likes: post.likes -1 + 2};
      
    }));
      
    
    

    return (
      <div>
          <Navbar bg="light" expand="md">
            <Navbar.Brand>Todo List</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-link" to="/">Home</Link>
                {/* <Link className="nav-link" to="/view">View</Link> */}
                <Link className="nav-link" to="/add">Add</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Container>
            <Routes>
              <Route index element={<View posts={posts} changeLikes={changeLikes}/>}/>
              <Route path="/add" element={<Add updateList={
              (postID, userName, postMsg, img, likes)=> updateList(postID, userName, postMsg, img, likes)}/>}/>
              {/* <Route path="/view" element={<View posts={posts}/>}/>   */}
            </Routes>          
          </Container>
      </div>
    );

}
export default App;