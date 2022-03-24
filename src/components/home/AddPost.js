import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function AddPost(props){
  const[state, changeState] = useState({
    id: 0,
    description: "",
    completed: false
  })


  const handleChange = (event) =>{
    const newState = {...state};
    if (event.target.name === "completed"){
      newState[event.target.name] = !state.completed
    } else {
      newState[event.target.name] = event.target.value;
    }
    changeState(newState)
  }

  const submithandler =(e) =>{
    e.preventDefault();
    props.updateList(state.id, state.description, state.completed)
    
    changeState({
      id: 0,
      description: "",
      completed: false
    })
  }
  

  return(
    <div className="container">
      <Form onSubmit={(e)=> submithandler(e)}>
        
        <Form.Group controlId="taskID">
          <Form.Label>Task ID</Form.Label>
          <Form.Control 
            name="id" type="number" 
            value={state.id} 
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            name="description" 
            type="text" 
            value={state.description} 
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="completed" >
          <Form.Label>Complete?</Form.Label>
          <Form.Control 
            name="completed" 
            type="checkbox" 
            checked={state.completed} 
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>

      </Form>
    </div>
  )
}
export default AddPost;