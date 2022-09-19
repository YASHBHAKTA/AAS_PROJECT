import './App.css';
import Nav from './nav'
import Register from './Register'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Nav />
      <Routes>
        
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Us Page</h1>} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
