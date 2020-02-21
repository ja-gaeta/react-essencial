import React from 'react'
import { Jumbotron } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'

const Header = () => {
  return (
    <div className='container mt-2'>
      <Jumbotron
        className='text-center'
        style={{ backgroundColor: '#0065b7', color: '#ffffff' }}>
        <h1 className='display-3'>Lista de Tarefas</h1>
        <p className='lead'>
          Uma app simples usando ReactJS, para refrescar nossa memória das
          tarefas pendentes.
        </p>
      </Jumbotron>
    </div>
  )
}

export default Header
