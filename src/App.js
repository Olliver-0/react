import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
const nome = 'Celso'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <SayMyName nome="Natã" />
      <SayMyName nome="Clarêncio" />
      <SayMyName nome={nome} />
      <Pessoa nome="Rodrigo" idade="28" profissao="Programador" foto="https://via.placeholder.com/150" />
    </div>
  );
};

export default App;
