import React from 'react'
import Navgation from './navgation'
import {Button,Card} from 'react-bootstrap'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

 const Favorie = ({favorie}) => {
    return (
       <div className='cwart'>
      
          
      {favorie.map((el)=>
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
    <Button variant="primary" className="bbb">watch</Button>

  </Card.Body>
  
</Card>      
         )   }
        
        </div>
        
    )
}
export default Favorie