import './Quesitons.css';
import ProductSelection from './components/pages/ProductSelection';
import NavBar from './components/navigation/NavBar';


function App() {
  return (
    <div>
    <div className="App">
      <NavBar />
    </div>
    <div className="">
      <ProductSelection />
    </div>
    </div>
  );
}

export default App;