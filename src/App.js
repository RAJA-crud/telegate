import './App.scss';
import { Login } from './pages/auth/login';
import { Chat } from './pages/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <>
                 
      <Router>
                <Routes>
                    <Route path="/" element={ <Chat/> } />
                    <Route exact path="/login" element={ <Login/> } />
                </Routes>
        </Router>
    </>
  );
}

export default App;
