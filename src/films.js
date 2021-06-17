import { getDefaultNormalizer } from '@testing-library/dom';
import React, {useState,useEffect}from 'react'
import {Card,Button } from 'react-bootstrap'
import './film.css'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


function Film ({input,getFavorie}) {
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
    
      film.filter((al)=>{
        if(input===""){
          return al
        }
        else if (al.Title.toLowerCase().includes(input.toLowerCase())){
          return al
        }
      }).map(el=>
        <div className= "navbarrr">
          
      <div className="crd">
      <div className='cwart'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.Images} />
  <Card.Body>
    <Card.Title>{el.Title}</Card.Title>

    <Card.Text>
      {el.Plot}
    </Card.Text>
    <Card.Text>
      <Rater total={10} rating={el.imdbRating} />
    </Card.Text>
    <Button variant="primary" className="bbb" >watch</Button>
    <Button variant="primary" className="bbb" onClick={()=>{getFavorie(el)}}>favrie</Button>

  </Card.Body>
  
</Card>
     </div>
     </div> 
     </div>
      )
  
   )

 }

export default Film
