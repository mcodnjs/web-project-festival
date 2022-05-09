import logo from './logo.svg';
import './App.css';
import Search from './components/Search.js';
import Home from './pages/Home.js';
import ReactDOM from 'react-dom';
import {Link, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">

        <Search/>
        <Routes>
            <Route exact path="/" component={Home} />
        </Routes>
    </div>
  );
}

export default App;
