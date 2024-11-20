import {createContext} from "react";
import {StatsInfo} from "./types.twit.ts";
import {User} from "./types.twit.ts";

export interface TwitterContextType {
    user: User,
    stats: StatsInfo,
    changeAvatar: (url: string | null) => void,
    changeName: (name: string | null) => void,
    changeStats: (statsType: keyof StatsInfo, sum: number) => void,
};

export const TwitterContext = createContext<TwitterContextType>({
    user: { name: "", avatar: "" },
    stats: { followers: 0, following: 0 },
    changeAvatar: () => {},
    changeName: () => {},
    changeStats: () => {},
});