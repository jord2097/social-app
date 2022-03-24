import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function Postcard(props){
    return(
        <Card className="mx-auto text-center mt-2">
            <Card.Header as="h5">@{props.userName}</Card.Header>
            {/* <Image fluid className="mx-auto" src={props.img} alt={this.props.alt} /> */}
            <Card.Body>
                <Card.Text>{props.postMsg}</Card.Text>
                {/* <Likes no={this.props.likes} likeaction={this.props.likeaction} postId={this.props.postID} /> */}
                {/* put unique id somewhere in the card*/}
            </Card.Body>
            <Card.Footer className="text-muted">{props.postID}</Card.Footer>
        </Card>
    )
}

export default Postcard