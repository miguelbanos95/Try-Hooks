import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Misc/Navbar/Navbar';
import Home from './views/Home/Home';
import PhotoDetails from './views/PhotoDetails/PhotoDetails';
import Photos from './views/Photos/Photos';
import Users from './views/Users/Users';
import UsersDetails from './views/UsersDetails/UsersDetails';

function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/photos' element={<Photos/>}/>
        <Route path="/photos/:id" element={<PhotoDetails />}/>
        <Route path='/users' element={<Users />}/>
        <Route path="/users/:id" element={<UsersDetails />}/>
        <Route path="*" element={<Navigate to="/" replace/>} />
        {/* <Route path='/' element={<Users />}/> */}
      </Routes>
    </div>
  );
}

export default App;
