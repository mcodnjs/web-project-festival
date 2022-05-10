import {Image} from "react-bootstrap";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";



function Magazine({imgUrl,Title,Content,likeCount} ){
    return(
        <>
            <span>{Title}</span>
            <Image src={imgUrl} width={322.5} height={180} />
            <div className={"magazine-content"}>
                <span>{Content}</span>
                <span>
                    {
                        likeCount >= 0 ? <IoHeart /> : <IoHeartOutline />
                    }
                    {" "}
                    {likeCount}
                </span>
            </div>
        </>
    );
};

export default Magazine;
