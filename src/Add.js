import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

function Add(props){
    const[state, changeState] = useState({
        id: 0,
        description: "",
        completed: false
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

    const submithandler =(e) =>{
        e.preventDefault()
        props.updateList(state.id, state.description, state.completed)
        toastr["success"]("You added a To-Do item!", "Success")
        changeState({
            id: 0,
            description: "",
            completed: false
        })
    }

    const handleChange = (e) => {
        // console.log(e)
        const newState = { ...state };
        if (e.target.name === "completed"){
            newState[e.target.name] = !state.completed
        } else {
            newState[e.target.name] = e.target.value;
        }
        changeState(newState);
    }

    return(
        <div className='container'>
            <Form onSubmit={(e)=> submithandler(e)}>
                <Form.Group controlId="taskID">
                    <Form.Label>Task ID</Form.Label>
                    <Form.Control name="id" type="number" value={state.id} onChange={(e)=> handleChange(e)}/>
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" type="text" value={state.description} onChange={(e)=> handleChange(e)}/>
                </Form.Group>
                <Form.Group controlId="completed">
                    <Form.Label>Complete?</Form.Label>
                    <Form.Control name="completed" type="checkbox" checked={state.completed} onChange={(e)=> handleChange(e)}/>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>


            </Form>
        </div>
    )
}

export default Add;