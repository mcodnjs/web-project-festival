import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
// import Home from './Home.js';
// import Card from './components/Card.js';
import ReactDOM from 'react-dom';
import {Link, Route,Routes} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
// import apiRouter from '../../src/routers/apiRouter.js'

function App() {

  const getApi = async () => {
    axios.get("/api").then((res) => console.log(res.data));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="App">

      <Header/>
      
      {/* <Card/> */}

        {/* <Routes>
            <Route exact path="/" component={Home} />
        </Routes> */}
    </div>
  );
}

export default App;
