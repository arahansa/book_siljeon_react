import {UserContext} from "./context/UserContext";
import HomeInner from "./home_inner/HomeInner";
import {useState} from "react";
import HomeInner2 from "./home_inner/HomeInner2";

const Home = () => {

    const [username, setUsername] = useState('');

    return (
        <div>
            <span>hiasdklfjsadklfsa</span>
            <UserContext.Provider value={username} >
                <HomeInner />
                <span>하이루?</span>
                <HomeInner2 />
            </UserContext.Provider>
            <input type={"text"} value={username} onChange={e => setUsername(e.target.value)} />
        </div>
    )
}

export default Home;