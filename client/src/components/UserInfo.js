import { IoArrowBackCircle } from "react-icons/io5";
import '../styles/UserInfo.css';

function UserInfo({user, setSidebar, sidebar}) {
    if(user!==null){
        return(
            <div className={"user-info-container"}>
                <div className={"user-info-inner-container"}>
                    {/* 사용자 프로필 */}
                    <div className={"profile-image-style"}>image</div>

                    {/* 카카오 API 로그인 이동*/}
                    <div><a>카카오로 로그인하기</a></div>
                </div>



                {/* nav bar 닫기*/}
                <IoArrowBackCircle onClick={()=>setSidebar(!sidebar)} className={"nav-bar-hidden-icon"}/>
            </div>
        );
    }
    else{
        return(
            <div>
                <div className={"user-info-inner-container"}>
                    {/* 사용자 프로필 */}
                    <div className={"profile-image-style"}>image</div>

                    {/* 사용자 정보 / 정보수정 / 로그아웃 */}
                    <div>
                        <div>{`${user}`}님</div>
                        <div><a>정보수정</a> / <a>로그아웃</a></div>
                    </div>
                </div>


                {/* nav bar 닫기*/}
                <IoArrowBackCircle onClick={()=>setSidebar(!sidebar)} className={"nav-bar-hidden-icon"}/>            </div>
        );
    }
};
export default UserInfo;
