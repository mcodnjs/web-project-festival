import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import ReactDOM from 'react-dom';
import axios from "axios";
import Search from './components/Search.js';
import Home from './pages/Home.js';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import SearchResult from "./pages/SearchResult";
import {useEffect, useState} from "react";

function App() {

  const [ selectArea, setSelectArea ] = useState("지역");
  const [ selectMonth, setSelectMonth ] = useState("날짜");

  const getApi = async () => {
    axios.get("/api").then((res) => console.log(res.data));
  };

 useEffect(()=>{
       console.log(selectArea);
       console.log(selectMonth);
       getApi();
   },[selectArea,selectMonth])

  return (
    <div className="App">
        <BrowserRouter>
            <Header />

      {/* <Card/> */}

        {/* <Routes>
            <Route exact path="/" component={Home} />
        </Routes> */}
            <Routes>
                <Route exact path="/" element={<Home Area={selectArea} Month={selectMonth} setArea={setSelectArea} setMonth={setSelectMonth} />}>Home</Route>
                <Route exact path="/search" element={<SearchResult />}>Home</Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
