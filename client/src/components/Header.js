import React, {useState} from 'react';
import { connect, useSelector, useDispatch, } from 'react-redux';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Header.css';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';
import { Navbar } from 'react-bootstrap';

// 아이콘 컬러 전체 변경 기능
import { IconContext } from 'react-icons';

function Header(props){
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    // not sidebar로 설정함

    return (
        <div>
            <div class="container-fixed nav">
                <IconContext.Provider value={{ color: '#000' }}>
                    <FaIcons.FaBars class="nav-toggler nav-inner" onClick={showSidebar} />
                    <a href="/" class="nav-title nav-inner">FESTI</a>
                    <form class="nav-search nav-inner">
                        <input class="search-input" type="search" placeholder="지역,행사명으로 검색하세요"></input>
                        <button class="btn btn-outline-light" type="submit">
                            <IoIcons.IoSearch class="" onClick={1} />
                        </button>
                    </form>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Header;
