import React from 'react'
import Film  from './films'
import './film.css'
import { Container } from "react-bootstrap";

 function Home() {
    return (
        <div>
             <Container className="d-flex flex-wrap">
   <Film/>
   </Container>
        </div>
    )
}
export default Home