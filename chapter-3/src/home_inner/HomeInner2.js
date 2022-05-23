import {useContext} from "react";
import {UserContext} from "../context/UserContext";


const HomeInner2 = () =>{

    const user = useContext(UserContext);
    return (
        <div>
            유저네임 : {user}
        </div>
    )
}

export  default HomeInner2;