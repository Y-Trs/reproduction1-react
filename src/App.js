import { Reset } from 'styled-reset';
import { Header, Top, About, Service } from './components/index.js'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Reset />
      <Header />
      <Routes>
          <Route path='/' element={<Top />} />
          <Route path='about' element={<About />} />
          <Route path='service' element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
