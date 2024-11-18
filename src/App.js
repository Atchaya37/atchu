// import logo from './logo.svg';
import './App.css';
import Log from './components/log';
import First from './components/react';
import './components/react.css';
import { Route, Routes } from 'react-router-dom';
import Sign from './components/sign';


function App() {
  return (
    <>
      
        <Routes>
          <Route path='/' element={<First />} />
          <Route path='/log' element={<Log />} />
          <Route path='/sign' element={<Sign />} />
        </Routes>      
    
    </>
  );
}

export default App;
