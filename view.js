import React from 'react';
import './App.css';
import Postcard from './postcard';

function View (props) {
    const buildPosts = () => {
      return props.posts.map((current) => (
        <Postcard postID={current.postID} userName={current.userName} postMsg={current.postMsg} img={current.img} likes={current.likes} changeLikes={props.changeLikes} />
        // pass through change likes function
      ))
    }
  return (
      <>
      <div>
        {buildPosts()}
      </div>   
      </>
  
  )  

  }

  
  


/* function View(props){    
  const buildRows = () =>  {
    return props.posts.map((current) => (
      <tr key={current.postID}>
        <td>
          {current.postID}
        </td>
        <td>
          {current.userName}
        </td>
        <td>
          {current.postMsg}
        </td>
        <td>
          {current.likes}
        </td>
      </tr>
    )
    )
  }


    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>username</th>
              <th>message</th>
              <th>likes</th>
            </tr>
          </thead>
          <tbody>
            {buildRows()}
          </tbody>
        </Table>
      </>
    );

} */


export default View;
