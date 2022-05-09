import styled from 'styled-components';
import '../styles/Search.css';
import {useEffect, useRef, useState} from "react";
import { IoSearch } from "react-icons/io5";


const SearchContainer = styled.div`
  display: flex;
  background-color: whitesmoke;
  width : 675px;
  height : 50px;
  border-radius: 50px;
`;

const areaList = ["전체","서울", "경기", "인천", "부산", "광주", "대구", "대전", "울산", "제주", "강원", "전남", "전북", "경북", "경남" ];
const dateList = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ];



function Search( {Area, Month, setArea, setMonth}){
    const onClickSearch = () => {
        console.log(Area);
        console.log(Month);
    }

    const [ isAreaActive, setIsAreaActive ] = useState(false);
    const onClickArea = () => setIsAreaActive(!isAreaActive);

    const [ isDateActive, setIsDateActive ] = useState(false);
    const onClickDate = () => setIsDateActive(!isDateActive);

    return(
        <SearchContainer>
            <button onClick={onClickArea} className={"item area areaDropDown"}>
                    <span>지역</span>
                    <nav className={`menu ${isAreaActive ? 'active' : 'inactive'}`}>
                        <ul>
                            {
                                areaList.map( (area,index) => <li key={index} onClick={()=>{setArea(area)}}>{area}</li>)
                            }
                        </ul>
                    </nav>
            </button>

            <div className={"line"}><div/></div>

            <button onClick={onClickDate} className={"item"}>
                    <span>날짜</span>
                <nav className={`menu ${isDateActive ? 'active' : 'inactive'}`}>
                    <ul>
                        {
                            dateList.map( (month,index) => <li key={index} onClick={()=>{setMonth(month)}}>{month}</li>)
                        }
                    </ul>
                </nav>
            </button>

            <div className={"line"}><div/></div>

            <button onClick={onClickSearch} className={"searchButton"}>
                <IoSearch className={"icon"} />
            </button>
        </SearchContainer>
    );
};

export default Search;