import logo from './logo.svg';
import './App.css';
import Search from './components/Search.js';
import Home from './pages/Home.js';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />}>Home</Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
