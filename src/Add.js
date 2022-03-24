import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

function Add(props){
    const[state, changeState] = useState({
        postID: 0,
        userName: "",
        postMsg: "",
        likes: 0
    })
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }

    const genUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
    }    

    const submithandler =(e) =>{
        e.preventDefault()
        props.updateList(state.postID, state.userName, state.postMsg, state.likes)
        toastr["success"]("You added a To-Do item!", "Success")
        changeState({
            postID: 0,
            userName: "",
            postMsg: "",
            likes: 0
        })
    }

    const handleChange = (e) => {
        // console.log(e)
        const newState = { ...state };
        newState[e.target.name] = e.target.value;
        newState.postID = genUUID()
        changeState(newState);
    }

    return(
        <div className='container'>
            <Form onSubmit={(e)=> submithandler(e)}>
                {/* <Form.Group controlId="postID">
                    <Form.Label>Post ID</Form.Label>
                    <Form.Control name="postID" type="number" value={state.postID} onChange={(e)=> handleChange(e)}/>
                </Form.Group> */}
                <Form.Group controlId="userName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="userName" type="text" value={state.userName} onChange={(e)=> handleChange(e)}/>
                </Form.Group>
                <Form.Group controlId="postMsg">
                    <Form.Label>Post Text</Form.Label>
                    <Form.Control name="postMsg" type="text" value={state.postMsg} onChange={(e)=> handleChange(e)}/>
                </Form.Group>
                <Form.Group controlId="likes">
                    <Form.Label>Likes</Form.Label>
                    <Form.Control name="likes" type="number" value={state.likes} onChange={(e)=> handleChange(e)}/>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>


            </Form>
        </div>
    )
}

export default Add;