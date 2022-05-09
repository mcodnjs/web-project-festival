import styled from "styled-components";
import '../styles/SearchResult.css';
import { useSearchParams } from "react-router-dom";
import {useEffect, useState} from "react";

const Select = styled.div`
  background-color: powderblue;
  margin-right: 30px;

  width : 250px;
  height : 50px;

  border : 0.5px solid gray;

  padding :0;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SearchResult(){

    const active = true;

    const [ selectType, setSelectType ] = useState("전체");
    const [ isActiveTotal, selIsActiveTotal ] = useState(active);
    const [ isActiveLocal, selIsActiveLocal ] = useState(!active);
    const [ isActiveFair, selIsActiveFair ] = useState(!active);
    const [ isActiveConcert, selIsActiveConcert ] = useState(!active);



    const [ searchParams ] = useSearchParams();
    const area = searchParams.get('area');
    const month = searchParams.get('month');

    useEffect(()=>{
        if(selectType === "전체"){
            selIsActiveTotal(active);
            selIsActiveLocal(!active);
            selIsActiveFair(!active);
            selIsActiveConcert(!active);
        }else if( selectType==="지역축제"){
            selIsActiveTotal(!active);
            selIsActiveLocal(active);
            selIsActiveFair(!active);
            selIsActiveConcert(!active);
        }
        else if( selectType==="전시회/박람회"){
            selIsActiveTotal(!active);
            selIsActiveLocal(!active);
            selIsActiveFair(active);
            selIsActiveConcert(!active);
        }
        else{
            selIsActiveTotal(!active);
            selIsActiveLocal(!active);
            selIsActiveFair(!active);
            selIsActiveConcert(active);
        }

    },[selectType])

    return(
     <div className={"outer-container"}>
         <div className={"inner-container"}>
             {/* 선택된 지역, 날짜*/}
             <div className={"select-container"}>
                 <Select>{ area !== "지역" ? area : "지역 미선택"}</Select>
                 <Select>{month !== "날짜" ? month :"월 미선택"}</Select>
             </div>

             <div className={"festival-type-container"}>
                 {/* 지역축제/ 전시회/박람회 / 콘서트/페스티벌 / 전체*/}
                 <div onClick={()=> setSelectType("전체")} className={`festival-type-item ${isActiveTotal ? 'search-result-active' : "search-result-inactive"}`}>전체</div>
                 <div onClick={()=> setSelectType("지역축제")} className={`festival-type-item ${isActiveLocal ? 'search-result-active' : "search-result-inactive"}`}>지역축제</div>
                 <div onClick={()=> setSelectType("전시회/박람회")} className={`festival-type-item ${isActiveFair ? 'search-result-active' : 'search-result-inactive'} `}>전시회/박람회</div>
                 <div onClick={()=> setSelectType("콘서트/페스티벌")} className={`festival-type-item ${isActiveConcert ? 'search-result-active' : 'search-result-inactive'} `}>콘서트/페스티벌</div>

             </div>

         </div>
     </div>
    );
};

export default SearchResult;
