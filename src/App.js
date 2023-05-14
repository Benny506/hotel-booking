import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import ScrollToTop from './components/scroll/ScrollToTop';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Routes>
        {/* Authentication Pages */}
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />


        {/* Main Pages */}
        <Route path='/home' element={<Home />} />
      </Routes>

      <ScrollToTop />
    </div>
  );
}

export default App;
