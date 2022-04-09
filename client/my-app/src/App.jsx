// import logo from './logo.svg';
import './App.css';
import ProductSelection from './components/pages/ProductSelection';
import Questions from './components/pages/Questions';
import Results from './components/pages/Results';
import NavBar from './components/navigation/NavBar';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ErrorPage from './components/pages/ErrorPage';

function App() {
  return (
    // <div>
    //  <ProductSelection/>
    // </div>
    <Router>
      <div>
          <nav>
            <Link to="/">Product Selection</Link>
            <Link to="/questions">Questions</Link>
            <Link to="/results">Results</Link>
          </nav>
          <Routes>
            <Route path="/" element={<ProductSelection />}></Route>
            <Route path="/questions" element={<Questions />}></Route>
            <Route path="/results" element={<Results />}></Route>
            <Route path="/*" element={<ErrorPage />}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
