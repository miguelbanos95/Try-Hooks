import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Misc/Navbar/Navbar';
import Home from './views/Home/Home';
import PhotoDetails from './views/PhotoDetails/PhotoDetails';
import Photos from './views/Photos/Photos';

function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/photos' element={<Photos/>}/>
        <Route path="/photos/:id" element={<PhotoDetails />}/>

        {/* <Route path='/' element={<Users />}/> */}
      </Routes>
    </div>
  );
}

export default App;
