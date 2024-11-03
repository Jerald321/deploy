
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './component/Header';
import Home from './component/Home';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
       <Route path ='/' element={<Header />} />
      <Route path ='/home' element={<Home />} />
     
    </Routes>
    
    </BrowserRouter>
  
  )
}

export default App;
