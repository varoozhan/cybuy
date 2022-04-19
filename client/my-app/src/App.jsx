// import logo from './logo.svg';
import './App.css';
import ProductSelection from './components/pages/ProductSelection';
import Questions from './components/pages/Questions';
import Results from './components/pages/Results';
import NavBar from './components/navigation/NavBar';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ErrorPage from './components/pages/ErrorPage';
import Home from './components/pages/Home';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
const customTheme = createTheme({
  palette: {
    primary: {
      main: "#9e9e9e"
    },
    secondary: {
      main: "#000000"
    },

    // type:'dark'
    // primary:'#9e9e9e',
    // secondary:''
  }
});

function App() {
  return (
    // <div>
    //  <ProductSelection/>
    // </div>
    <ThemeProvider theme={customTheme}>
      {/* <div> */}
          {/* <nav> */}
          <Router>
            <NavBar />
            {/* <Link to="/">Product Selection</Link>
            <Link to="/questions">Questions</Link>
            <Link to="/results">Results</Link>
            </NavBar> */}
          {/* </nav> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="product_selection" element={<ProductSelection />}></Route>
            <Route path="questions" element={<Questions />}></Route>
            <Route path="results" element={<Results />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
          </Router>
      {/* </div> */}
      </ThemeProvider>
  );
}

export default App;
