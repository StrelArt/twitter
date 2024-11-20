import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";



interface AvatarProps {
    size?: string

}

const Avatar = ({size}:AvatarProps) => {
    const {user, changeAvatar, changeName} = useContext(TwitterContext);

    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                changeAvatar(url);
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter new name');
                changeName(name);
            }}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar} alt={user.name}
        />
    );
};

export default Avatar;