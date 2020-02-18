import React from 'react'
import { Row, Col } from 'reactstrap'
import { FaTrashAlt } from 'react-icons/fa'

const Tarefa = ({ tarefas, deleteTarefa }) => {
  const listaDasTarefas = tarefas.map(tarefa => {
    return (
      <div key={tarefa.id}>
        <Row>
          <Col>
            <p
              style={{
                backgroundColor: '#cce5ff',
                padding: '0.5rem',
                borderRadius: '.25rem',
                color: '#175393'
              }}>
              {tarefa.texto}
              <span>
                <button
                  style={{
                    float: 'right',
                    backgroundColor: '#cce5ff',
                    color: '#175393',
                    border: 'none'
                  }}
                  onClick={() => deleteTarefa(tarefa.id)}>
                  <FaTrashAlt />
                </button>
              </span>
            </p>
          </Col>
        </Row>
      </div>
    )
  })
  return <div>{listaDasTarefas}</div>
}

export default Tarefa
