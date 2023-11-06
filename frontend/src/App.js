import './App.css';
import EmployeeForm from './components/EmployeeForm';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UpdatePage from './pages/UpdatePage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<EmployeeForm/>}/>
        <Route path='/edit/:id' element={<UpdatePage/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
