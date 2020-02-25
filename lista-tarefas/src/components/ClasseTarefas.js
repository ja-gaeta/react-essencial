import React, { Component } from 'react'
import Tarefa from './Tarefa'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'

export default class ClasseTarefas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tarefas: [],
      tarefaAtual: {
        texto: '',
        id: ''
      }
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    const novaTarefa = this.state.tarefaAtual
    if (novaTarefa !== '') {
      const tarefas = [...this.state.tarefas, novaTarefa]
      this.setState({
        tarefas,
        tarefaAtual: {
          texto: '',
          id: ''
        }
      })
    }
  }
  handleChange = e => {
    this.setState({
      tarefaAtual: {
        texto: e.target.value,
        id: Date.now()
      }
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
        <Tarefa tarefas={this.state.tarefas} deleteTarefa={this.deleteTarefa} />
      </div>
    )
  }
}
