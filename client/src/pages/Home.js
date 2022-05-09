import Search from "../components/Search";
import styled from 'styled-components';
import '../styles/Home.css';
import {useEffect, useState} from "react";

const Main = styled.div`
    width : 100%;
    height : 100%; 
  
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
  margin : 0;
  color : gray;
  font-weight: lighter;
`;

const defaultData = {
    title: 'defaultTitle',
    contents: [
        {
            mTitle: "",
            mContent: "",
            mImage: "",
            likeCount: 0
        }
    ],
};

function Home( {Area, Month, setArea, setMonth} ){

    const [ magazine, setMagazine ] = useState(null);

    useEffect(() => {
        fetch('/files/magazine.json')
            .then(res => res.json())
            .then(res => setMagazine(()=>res.data));
    },[]);

    useEffect( () => {
        console.log(magazine);
    },[magazine])

    return(
        <div>
            <Main>
                <div>
                    <Title>함께 떠나볼까요?</Title>
                </div>
                <div className={"flex-item"}>
                    <Search setArea={setArea} setMonth={setMonth} Area={Area} Month={Month}/>
                </div>

                <section>
                    {/* 매거진 / 기획전*/}
                    <Title>매거진 / 기획전</Title>
                    <div className={"magazine-card-container"}>
                        <div className={"magazine-card-item"}>
                            card1
                        </div>
                        <div className={"magazine-card-item"}>
                            card2
                        </div>
                        <div className={"magazine-card-item"}>
                            card3
                        </div>
                        <div className={"magazine-card-item"}>
                            card4
                        </div>
                    </div>

                    <button className={"more-button"}>더보기</button>
               </section>

                <section className={"today-recommend-container"}>
                    {/* 오늘의 추천 */}
                    <Title>오늘의 추천</Title>
                </section>
            </Main>
        </div>
    );
}

export default Home;
