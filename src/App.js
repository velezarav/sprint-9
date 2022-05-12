import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PoemWall from './components/PoemWall'
import Home from './components/Home'
import PersonalArea from './components/Login';
import Signup from './components/Signup'
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1 className='title-row'>MAKE ME</h1>
      <h1 className='title-column'>A<span>&#160;</span> POEM</h1>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path="/login" element={<PersonalArea />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/poem-wall" element={<PoemWall />} />
          <Route path='/register' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
