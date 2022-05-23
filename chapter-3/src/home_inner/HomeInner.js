import {UserContext} from "../context/UserContext";


const HomeInner = () => {
    return  <UserContext.Consumer>
        {username => <p>{username}님 안녕하세요?</p>}
    </UserContext.Consumer>
}

export default HomeInner;