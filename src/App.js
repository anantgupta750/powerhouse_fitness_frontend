// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Trainer from './components/admin/Trainer';
import Program from './components/admin/Program';
import Admin_Nav from './components/admin/Admin_Nav';
import User_Nav from './components/user/User_Nav';
import AdmMem_list from './components/admin/AdmMem_list';

function App() {
  return (
    <>
    <Navbar />
    <Login /> 
    <Register />
    <Trainer />
    <Program />
    <Admin_Nav />
    <User_Nav />
    <AdmMem_list  />
    </>
    
    
  );
}

export default App;
