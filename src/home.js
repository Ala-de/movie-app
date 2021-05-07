import {React,useState} from 'react'
import Film  from './films'
import './film.css'
import Navgation from './navgation'
import { Container } from "react-bootstrap";

 function Home() {
     const  [input,setInput]=useState("")
     const handelchange=(e)=>{
         setInput(e.target.value)
     }

    return (
        <div>
                  <Navgation handelchange={handelchange}/>

             <Container className="d-flex flex-wrap">
   <Film  input={input}/>
   </Container>
        </div>
    )
}
export default Home