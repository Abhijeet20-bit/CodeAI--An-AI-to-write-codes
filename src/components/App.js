
import '../App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes
} from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Contact from './Contact';
import About from './About/About';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Register from './Register';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chat from './MainComponent/Chat';
function App() {
  return (
    <>
    <Router>
    
    <main>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/ChatGPT" element={<Chat/>} />
      </Routes>
      
    </main>
    
   </Router>
   <ToastContainer />
   </>
  );
}

export default App;
