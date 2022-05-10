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
import {Card} from "react-bootstrap";
import * as FaIcons from 'react-icons/fa';

function App() {

  const [ selectArea, setSelectArea ] = useState("지역");
  const [ selectMonth, setSelectMonth ] = useState("날짜");
  const [ user, setUser ] = useState(null);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const getApi = async () => {
    axios.get("/api").then((res) => console.log(res.data));
  };

 useEffect(()=>{
       console.log(selectArea);
       console.log(selectMonth);
   },[selectArea,selectMonth])

  return (
    <div className="App">
        <BrowserRouter>
            <Header showSidebar={showSidebar}/>

            <Routes>
                <Route exact path="/" element={<Home setSidebar={setSidebar} user={user} showSidebar={showSidebar} Area={selectArea} Month={selectMonth} setArea={setSelectArea} setMonth={setSelectMonth} sidebar={sidebar} />}>Home</Route>
                <Route exact path="/search" element={<SearchResult showSidebar={showSidebar} sidebar={sidebar}/>}>Home</Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
