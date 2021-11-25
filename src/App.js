//Importando Componentes
import Carrosel from '../src/components/Carrosel';
import SobreNos from './components/SobreNos';
import ConsultasDisponiveis from './components/ConsultasDisponiveis';
import NavBar from './components/NavBar';
import Colaboradores from './components/Colaboradores';


//Arquivos CSS separados
import '../src/css/reset.css';
import '../src/css/crud.css';
import '../src/css/style.css';
import '../src/css/config.css';
import '../src/css/crud/button.css';
import '../src/css/crud/main.css';
import '../src/css/crud/modal.css';
import '../src/css/crud/records.css';
import '../src/css/cabeçalho.css';
import '../src/css/consultas.css';
import '../src/css/colaboradores.css';
import '../src/css/sobre-nos.css';


function App() {
  return(
    
    <div className="container-de-tudo">
      <NavBar/>
      <Carrosel/>
      <SobreNos/>
      <ConsultasDisponiveis/>
      <Colaboradores/>
    </div>
  )
}

export default App;
