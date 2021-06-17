import React from 'react'
import axios from 'axios';
import {useState} from 'react';
import {Form,Button,Modal, Card }from  'react-bootstrap'

export default function Update({el}) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

//EDit======================================================================
// edit//
const [edit, setEdit]=useState({
  title: el.title,
  desc: el.Plot,
  rating: el.Rated,
  image: el.Poster,
  type: el.Genre,
  year: el.Year
})

const handleEdit = e => {
    const {name, value} = e.target
    setEdit({...edit, [name]:value})
  }


const Edit  = async (id) => {
  console.log(edit)
  await axios.put(`http://localhost:3004/posts/${id}`, edit)
    .then((response) => {console.log(response.data)
        setEdit(response.data)})
    .catch((error) => console.log(error));
  }


    return (
        <div>

<Button className="buton" variant="primary" onClick={handleShow}>
     edit
   </Button>

            <Modal show={show} onHide={handleClose}>

  
<Modal.Header closeButton>
<Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form>
<Form.Group controlId="formBasicEmail">
 <Form.Label>Title</Form.Label>
<Form.Control type="text" placeholder="title" defaultValue={el.title} name='title' onChange={handleEdit}/>

</Form.Group>

<Form.Group controlId="formBasicPassword">
 <Form.Label>description</Form.Label>
 <Form.Control type="text" placeholder="description" defaultValue={el.Plot} name='desc' onChange={handleEdit} />
</Form.Group>
<Form.Group controlId="formBasicPassword">
 <Form.Label> Rating</Form.Label>
 <Form.Control type="text" placeholder="rating"  defaultValue={el.Rated} name='rating' onChange={handleEdit} />
</Form.Group>
<Form.Group controlId="formBasicPassword">
 <Form.Label>image</Form.Label>
 <Form.Control type="text" placeholder="image" defaultValue={el.Poster} name='image' onChange={handleEdit} />
</Form.Group>
<Form.Group controlId="formBasicPassword">
 <Form.Label>type</Form.Label>
 <Form.Control type="text" placeholder="image"  defaultValue={el.Genre} name='type' onChange={handleEdit} />
</Form.Group>
<Form.Group controlId="formBasicPassword">
 <Form.Label>year</Form.Label>
 <Form.Control type="text" placeholder="image"    defaultValue={el.Year}  name='year' onChange={handleEdit} />
</Form.Group>
<Button variant="secondary" onClick={handleClose}>
 Close
</Button>
<Button variant="primary" onClick={()=>Edit(el.id)}>
 Save Changes
</Button>
</Form>
</Modal.Body>



</Modal>

            
        </div>
    )
}
