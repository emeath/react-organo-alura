import Colaborador from "../Colaborador"
import "./Time.css"

// const Time = (props) => {
/*
    const nomeTime = props.nomeTime;
    const corDeFundo = props.corDeFundo;
    const corDeTitulo = props.corDeTitulo;
*/
const Time = ( {nomeTime, corDeFundo, corDeTitulo, colaborador} ) => {
    return (
        colaborador.length > 0 && <section className="time" style={ { backgroundColor: corDeFundo } }>
            <h3 style={{borderColor: corDeTitulo}}>{nomeTime}</h3>
            <div className="colaboradores">
                { colaborador.map( colab => <Colaborador 
                                                key={colab.nome}
                                                nomeDoColaborador={colab.nome}
                                                cargoDoColaborador={colab.cargo}
                                                imagem={colab.imagem} /> ) }
            </div>
        </section>
    )

    /*
    
    return (
        (colaborador.length > 0) ? <section className="time" style={ { backgroundColor: corDeFundo } }>
            <h3 style={{borderColor: corDeTitulo}}>{nomeTime}</h3>
            <div className="colaboradores">
                { colaborador.map( colab => <Colaborador nomeDoColaborador={colab.nome} cargoDoColaborador={colab.cargo} imagem={colab.imagem} /> ) }
            </div>
        </section>
        : ""
    )
    
    */
}

export default Time