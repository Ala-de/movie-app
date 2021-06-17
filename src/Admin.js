
import React,{useEffect} from 'react'
import {Form,Button,Modal, Card } from  'react-bootstrap'
import Update from './Update'
import {useState} from 'react';
import axios from 'axios';

import './styleadmin.css'
const Admin = () => {

  // **********get movies************
  
  const [movie, setMovie] = useState([])  
   const getMovie = ()=> {axios.get('http://localhost:3004/posts')
  .then((response )=> {setMovie(response.data)   }) } 
  
  useEffect(()=> {getMovie() },[])
  

  const [input,setInput]=useState(
    {
      title:"",
      desc:""
}
);
//handleChage
const handleChange = e => {
  const { name, value } = e.target;
  //e.target.name=e.target.value
  setInput({
    ...input,
    [name]: value,
  
  });
 
};








// delete function//
 // DELETE request using axios with error handling
 
 const deleteData=(id)=> {  
 axios.delete(`http://localhost:3004/posts/${id}`)   
.then((response) => console.log(response) )  
.catch((err) =>  console.log(err)   )
 }

//post data 
const handlesubmit = (e) => {
e.preventDefault();
axios
  .post("http://localhost:3004/posts",input)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
  
}


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
<>
    <div className='container md-2'>
    <Button className="buton" variant="primary" onClick={handleShow}>
     Add Film
   </Button>
  
  
  
  

<Modal show={show} onHide={handleClose}>

  
<Modal.Header closeButton>
<Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form onSubmit={handlesubmit}>
<Form.Group controlId="formBasicEmail">
 <Form.Label>Title</Form.Label>
 <Form.Control type="text" placeholder="title" name='title' onChange={handleChange}/>

</Form.Group>

<Form.Group controlId="formBasicPassword">
 <Form.Label>description</Form.Label>
 <Form.Control type="text" placeholder="description"  name='desc' onChange={handleChange} />
</Form.Group>
<Form.Group controlId="formBasicPassword">
 <Form.Label> Rating</Form.Label>
 <Form.Control type="text" placeholder="rating"  name='rating' onChange={handleChange} />
</Form.Group>
<Form.Group controlId="formBasicPassword">
 <Form.Label>image</Form.Label>
 <Form.Control type="text" placeholder="image"  name='image' onChange={handleChange} />
</Form.Group>
<Form.Group controlId="formBasicPassword">
 <Form.Label>type</Form.Label>
 <Form.Control type="text" placeholder="image"  name='type' onChange={handleChange} />
</Form.Group>
<Form.Group controlId="formBasicPassword">
 <Form.Label>year</Form.Label>
 <Form.Control type="text" placeholder="image"  name='year' onChange={handleChange} />
</Form.Group>
<Button variant="secondary" onClick={handleClose}>
 Close
</Button>
<Button type='submit' variant="primary" onClick={handleClose}>
 Save Changes
</Button>
</Form>
</Modal.Body>



</Modal>




 </div>

   { movie.map(el=>
      
      <div className="crd d-flex justify-content-around">
      <div className='cwart'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>

    <Card.Text>
      {el.desc}
    </Card.Text>
    <Card.Text>
      {el.rating}<img src="./star.png" className="star"/>
    </Card.Text>
    

     
    
<Update el={el}/>   
  
    
    <Button className="buttonn" variant="primary" onClick={()=>deleteData(el.id)} >
     Supprission
   </Button>
  </Card.Body>
</Card>
     </div> 
     </div>
   )}
    </>
   )
  
 }

export default Admin
