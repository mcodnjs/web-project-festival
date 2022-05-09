import Header from '../components/Header.js';
import Search from "../components/Search";
import styled from 'styled-components';
import '../styles/Home.css';

const Main = styled.div`
    width : 100vw;
    height : 100vh; 
  
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const Title = styled.h1`
  margin : 0;
  color : gray;
  font-weight: lighter;
`;

function Home(){
    return(
        <div>
            <Header />
            <Main>
                <div>
                    <Title>함께 떠나볼까요?</Title>
                </div>
                <div className={"flex-item"}>
                    <Search />
                </div>

                <div>
                    {/* 매거진 / 기획전*/}
                    <Title>매거진 / 기획전</Title>

               </div>
            </Main>

        </div>
    );
}

export default Home;
