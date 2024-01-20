import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: "Front-end",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      nome: "Back-end",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    },
    {
      nome: "Fullstack",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE9F5"
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColabCadastrado = (colab) => {
    console.log(colaboradores)
    setColaboradores([...colaboradores, colab])
    
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrarColaborador={colab => aoNovoColabCadastrado(colab)} osTimes={times.map(time => time.nome)}/>
      
      {times.map( 
        time => <Time 
                  key={time.nome}
                  nomeTime={time.nome}
                  corDeFundo={time.corSecundaria}
                  corDeTitulo={time.corPrimaria}
                  colaborador={colaboradores.filter( colab => colab.time === time.nome )}
                /> 
      )}
      
    </div>
  );
}

export default App;
