import React, { Component } from 'react'
import Tarefa from './Tarefa'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'
import Alerta from '../components/Alerta'

export default class ClasseTarefas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tarefas: [],
      tarefaAtual: {
        texto: '',
        id: ''
      },
      inputError: false
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    const novaTarefa = this.state.tarefaAtual
    if (novaTarefa.texto !== '') {
      const tarefas = [...this.state.tarefas, novaTarefa]
      this.setState({
        tarefas,
        tarefaAtual: {
          texto: '',
          id: ''
        }
      })
    } else this.setState({ inputError: true })
  }
  handleChange = e => {
    this.setState({
      tarefaAtual: {
        texto: e.target.value,
        id: Date.now()
      },
      inputError: false
    })
  }
  deleteTarefa = id => {
    const filteredTarefas = this.state.tarefas.filter(
      tarefa => tarefa.id !== id
    )
    this.setState({
      tarefas: filteredTarefas
    })
  }
  updateTarefa = (texto, id) => {
    const tarefas = this.state.tarefas
    tarefas.map(tarefa => {
      if (tarefa.id === id) {
        tarefa.texto = texto
      }
      return null
    })
    this.setState({
      tarefas
    })
  }
  render() {
    const { texto } = this.state.tarefaAtual
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='mb-3'>
          <InputGroup>
            <Input type='text' value={texto} onChange={this.handleChange} />
            <InputGroupAddon addonType='append'>
              <Button type='submit' color='primary' outline>
                Adicionar
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
        <Tarefa
          tarefas={this.state.tarefas}
          deleteTarefa={this.deleteTarefa}
          updateTarefa={this.updateTarefa}
        />
        <Alerta
          isVisible={this.state.inputError}
          message='Não pode ficar em branco'
        />
      </div>
    )
  }
}
