import React, {useState} from 'react';
import { connect, useSelector, useDispatch, } from 'react-redux';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Header.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// 아이콘 컬러 전체 변경 기능
import { IconContext } from 'react-icons';

function Header(props){
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    // not sidebar로 설정함

    return (
        <div>
            <IconContext.Provider value={{ color: '#fff' }}>
                {/* 네비게이션 토글 코드 */}
                <div className="navbar">
                    <a herf="/">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </a>
                </div>
                {/* <nav className={sidebar ? 'nav-menu active' : 'nav-manu'}>
                    <ui className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="/" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                    </ui>
                </nav>  */}
            </IconContext.Provider>
        </div>
    )
}

export default Header;
