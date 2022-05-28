import { Reset } from 'styled-reset';
import { Header, Top, About, Service } from './components/index.js'

function App() {
  return (
    <div className="App">
      <Reset />
      <Header />
      <Top />
      <About />
      <Service />
    </div>
  );
}

export default App;
