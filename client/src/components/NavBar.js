import {Link} from "react-router-dom";
import UserInfo from "./UserInfo";

function NavBar({sidebar,user,setSidebar}){

    const navList = ["고객센터", "공지사항", "파트너 신청","FAQ", "1:1 문의사항", "version"];

    return(
        <div className={`nav-side-bar ${sidebar ? "nav-side-view" : "nav-side-hidden"}`}>
            <div className={"nav-side-bar-user-container"}>
                <UserInfo user={user} setSidebar={setSidebar} sidebar={sidebar}/>
            </div>

            <div>
                <ul className={"nav-list-container"}>
                    {
                        navList.map( (item, index) => {
                            return <li className={"nav-list-item"} key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
};

export default NavBar;
