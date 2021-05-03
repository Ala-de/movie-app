import { getDefaultNormalizer } from '@testing-library/dom';
import React, {useState,useEffect}from 'react'
import {Card,Button } from 'react-bootstrap'
import './film.css'

function Film () {
  const [film, setfilm ]= useState([])
  const getfilm = ()=>{
    
    fetch('film.json').then(
          response => response.json()).then 
                   (film => setfilm(film));
  }
  
  useEffect(()=> {getfilm()
  },[])

  console.log(film)
  return(
    
      film.map(el=>
      <div className='cwart'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.Images} />
  <Card.Body>
    <Card.Title>{el.Title}</Card.Title>

    <Card.Text>
      {el.Plot}
    </Card.Text>
    <Card.Text>
      {el.imdbRating}<img src="./star.png" className="star"/>
    </Card.Text>
    <Button variant="primary">watch</Button>
  </Card.Body>
</Card>
     </div> 
      )
  
   )

 }

export default Film
