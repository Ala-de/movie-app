import React from 'react'
import {Button } from 'react-bootstrap'
import Navgation  from './navgation'
export default function BUTON() {
    return (
        <div>
            <Button variant="AJOUTER" class ="btn"size="lg" active >
  AJOUTER
  </Button>{' '}
  <Button variant="MODIFER" class="btn" size="lg" active>
  MODIFER
  </Button>{' '}
  <Button variant="SUPPRIMER" class="btn"size="lg" active>
  SUPPRIMER
  </Button>{' '}

  
        </div>
    )
}
