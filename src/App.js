import './App.css';
import NavBar from './components/NavBar';

import Form from './components/Form';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
       <div>

        
            <li>
              <Link to="/navbar">Home</Link>
            </li>
            <li>
              <Link to="/">Form</Link>
            </li>

        <Routes>
        <Route exact path="/" element={<Form/>} />
        <Route path="/navbar" element={<NavBar/>} />
        </Routes>
     </div>
    </Router>
  );
}

export default App;
