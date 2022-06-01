import { Reset } from 'styled-reset';
import { Header, Top, About, Service, News, Contact } from './components/index.js'
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
          <Route path='news' element={<News />} />
          <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
