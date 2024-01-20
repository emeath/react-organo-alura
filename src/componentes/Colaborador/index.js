import './Colaborador.css'

const Colaborador = (props) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={props.imagem} alt=''/>
            </div>
            <div className='rodape'>
                <h4>{props.nomeDoColaborador}</h4>
                <h5>{props.cargoDoColaborador}</h5>
            </div>
        </div>
    )
}

export default Colaborador;