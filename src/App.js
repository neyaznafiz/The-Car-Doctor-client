import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About'
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/about' element={<About></About>}></Route>

      </Routes>
    </div>
  );
}

export default App;
