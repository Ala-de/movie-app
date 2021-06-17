import React from 'react'
import Navgation from './navgation'
export default function Contact() {
    
    return (
        <div>
            
            <form>
  <label>
  Non  :     <input onChange="handelChange" type="text" name="name" /> 
  prenom  :     <input onChange="handelChange" type="text" name="name" /> 
    mail:     <input onChange="handelChange" type="text" name="name" /> 
  
  
  </label>
  <input type="submit" value="Envoyer" />
</form>
        </div>
    )
}
