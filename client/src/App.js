import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
// import Home from './Home.js';
import ReactDOM from 'react-dom';
import {Link, Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Header/>

        {/* <Routes>
            <Route exact path="/" component={Home} />
        </Routes> */}
    </div>
  );
}

export default App;
