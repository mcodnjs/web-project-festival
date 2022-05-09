import logo from './logo.svg';
import './App.css';
import Search from './components/Search.js';
import Home from './pages/Home.js';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import SearchResult from "./pages/SearchResult";
import {useEffect, useState} from "react";

function App() {
   const [ selectArea, setSelectArea ] = useState(null);
   const [ selectMonth, setSelectMonth ] = useState(null);

   useEffect(()=>{
       console.log(selectArea);
       console.log(selectMonth);
   },[selectArea,selectMonth])

  return (
    <div className="App">
        <BrowserRouter>
            <Header />

            <Routes>
                <Route exact path="/" element={<Home Area={selectArea} Month={selectMonth} setArea={setSelectArea} setMonth={setSelectMonth} />}>Home</Route>
                <Route exact path="/search" element={<SearchResult />}>Home</Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
