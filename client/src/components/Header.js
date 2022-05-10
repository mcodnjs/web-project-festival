import React, {useState} from 'react';
import { connect, useSelector, useDispatch, } from 'react-redux';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../styles/Header.css';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';
import { Navbar } from 'react-bootstrap';

// 아이콘 컬러 전체 변경 기능
import { IconContext } from 'react-icons';

function Header({showSidebar}){

    // not sidebar로 설정함

    return (
        <div className={"header-nav-container"}>
            <div className="nav">
                <IconContext.Provider value={{ color: '#000' }}>
                    <FaIcons.FaBars className={`nav-item`} onClick={showSidebar} />

                    <a href="/" className="nav-title nav-inner nav-item">FESTI</a>
                    <form className="nav-search nav-inner nav-item">
                        <input className="search-input" type="search" placeholder="지역,행사명으로 검색하세요" />
                        <button className="btn btn-outline-light" type="submit">
                            <IoIcons.IoSearch class="" onClick={1} />
                        </button>
                    </form>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Header;
