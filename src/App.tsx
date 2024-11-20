import './App.css'
import Navigation from "./components/Navigation.tsx";
import Body from "./components/Body.tsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.ts";
import {StatsInfo, User} from "./utils/types.twit.ts";


function App() {
    const [user, setUser] = useState<User>({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState<StatsInfo>({
        followers: 0,
        following: 0
    });

    const changeAvatar = (url: string | null) => {
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    }

    const changeName = (name: string | null) => {
        setUser((prevState) => ({ ...prevState, name: name || prevState.name }))
    }

    const changeStats = (statsType: keyof StatsInfo, sum: number) => {
        setStats((stats) => {
            let res = stats[statsType] + sum;
            res = res < 0 ? 0 : res;
            return {...stats, [statsType]: res};
        })
    }

    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user, stats, changeAvatar, changeName, changeStats}}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    )
}

export default App
