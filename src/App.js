import './App.css';
import NavBar from './components/NavBar';
import FetchData from './components/FetchData';

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
            <li>
              <Link to="/fetch-data">Fetch Data</Link>
            </li>

        <Routes>
        <Route exact path="/" element={<Form/>} />
        <Route path="/navbar" element={<NavBar/>} />
        <Route path="/fetch-data" element={<FetchData/>} />
        
        </Routes>
     </div>
    </Router>
  );
}

export default App;
