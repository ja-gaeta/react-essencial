import React, { useState, useEffect } from 'react'
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from 'reactstrap'
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import styled from 'styled-components'
import Alerta from '../components/Alerta'

const Tarefa = ({ tarefas, deleteTarefa, updateTarefa }) => {
  const [modal, setModal] = useState(false)
  const [visible, setVisible] = useState(false)
  const [currentId, setCurrentId] = useState('')
  const [currentText, setCurrentText] = useState('')
  const toggle = () => setModal(!modal)

  useEffect(() => {
    updateTarefa(currentText, currentId)
  }, [updateTarefa, currentId, currentText])

  const listaDasTarefas = tarefas.map(tarefa => {
    return (
      <div key={tarefa.id}>
        <Row>
          <Col>
            <p className='tarefa'>
              {tarefa.texto}
              <span>
                <IconButton onClick={() => deleteTarefa(tarefa.id)}>
                  <FaTrashAlt />
                </IconButton>
                <IconButton
                  onClick={() => {
                    setModal(true)
                    setCurrentId(tarefa.id)
                    setCurrentText(tarefa.texto)
                  }}>
                  <FaPencilAlt />
                </IconButton>
              </span>
            </p>
          </Col>
        </Row>
        <Modal isOpen={modal} toggle={toggle} backdrop={false} centered={true}>
          <ModalHeader toggle={toggle}>Editar Tarefa</ModalHeader>
          <ModalBody>
            {console.log(tarefa.id)}
            <Input
              type='text'
              value={currentText}
              onChange={e => {
                if (e.target.value.length > 0) {
                  setCurrentText(e.target.value)
                  setCurrentId(currentId)
                  setVisible(false)
                } else {
                  setVisible(true)
                }
              }}
            />
            <Alerta isVisible={visible} message='Mínimo de um caracter' />
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={toggle}>
              Feito
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    )
  })
  return <div>{listaDasTarefas}</div>
}

const IconButton = styled.button`
  float: right;
  background-color: #cce5ff;
  color: #175393;
  border: none;
`

export default Tarefa
