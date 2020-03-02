import React from 'react'
import { Alert } from 'reactstrap'

const Alerta = ({ isVisible, message }) => {
  return (
    <div>
      <Alert isOpen={isVisible} color='danger'>
        {message}
      </Alert>
    </div>
  )
}

export default Alerta
