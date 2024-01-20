import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react'


const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('form submetido', nome, cargo, imagem, time)
        props.aoCadastrarColaborador({nome, cargo, imagem, time})
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    label="Nome" 
                    obrigatorio={true}  
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={feijoada => setCargo(feijoada)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={maca => setImagem(maca)}
                />
                <ListaSuspensa
                    label="Time"
                    itens={props.osTimes} 
                    aoAlterado={time => setTime(time)}
                    obrigatorio={true}
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;