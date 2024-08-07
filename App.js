import logo from './logo.svg';
import './App.css';
import Traficslights from './Components/Traficslights';
import Commentbox from './Commentbox/Commentbox';
import Circles from './Circles/Circles';
import Filters from './Commentbox/Filters';
import Acordian from './Components/Acordian';

function App() {
  return (
    <div>
      <Acordian />
      {/* <Filters /> */}
      <Circles />
      <Traficslights />
      <Commentbox />
    </div>
  );
}

export default App;
