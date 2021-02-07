import './App.css';
import Intervalo from './components/Intervalo';
import Soma from './components/Soma';
import Media from './components/Media';
import Sorteio from './components/Sorteio.jsx';

function App() {
  return (
    <div className="App">
      <div className="line">
        <Intervalo></Intervalo>
      </div>
      <div className="line">
        <Soma></Soma>
        <Media></Media>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
