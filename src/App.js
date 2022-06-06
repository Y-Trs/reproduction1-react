import { Reset } from 'styled-reset';
import { Header, Top, About, Service, News, Contact, Footer } from './components/index.js'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App" style={styledApp}>
      <Reset />
      <Header />
      <Routes>
          <Route path='/' element={<Top />} />
          <Route path='about' element={<About />} />
          <Route path='service' element={<Service />} />
          <Route path='news' element={<News />} />
          <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

const styledApp = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}