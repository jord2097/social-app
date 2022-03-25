import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Likes from './Likes'
import './postcard.css'


function Postcard(props){
    const userID = localStorage.getItem("userID").replace(/"/g, "");
    

    return(
        <Card className="mx-auto text-center mt-2">
            {userID.length > 0 && <Card.Header as="h5">{props.userName} (@{userID})</Card.Header> }           
            {userID.length <= 0 && <Card.Header as="h5">{props.userName}</Card.Header>}          
            <Card.Body>
                <Image fluid className="mx-auto" src={props.img}/>
                <Card.Text>{props.postMsg}</Card.Text>                             
                <Likes postID={props.postID} likes={props.likes} changeLikes={props.changeLikes}  />
                {/* pass through change likes function */}
            </Card.Body>
            <Card.Footer className="text-muted">{props.postID}</Card.Footer>
        </Card>
    ) 

    
    
}

export default Postcard