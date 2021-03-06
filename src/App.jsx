import './App.scss';
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ListNews from './components/ListNews/ListNews'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/form' element={<Form />} />
            <Route path='/' element={<Home />} />
            <Route path='/listNews' element={<ListNews />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
      <Footer />
    </div>
  );
}

export default App;
