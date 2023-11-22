import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/Login';
import RegisterForm from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" exact element={<Login/>}></Route>
      <Route path="/register" exact element={<RegisterForm/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
