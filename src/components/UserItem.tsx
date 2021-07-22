import React, {FC}   from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
}

const UserItems: FC<UserItemProps> = ({user}) => {
    return (
        <div>
            <div  style={{padding: 15, border: "1px solid gray"}}>
                {user.id}. {user.name} lives in the city {user.address.city} in street {user.address.street}
            </div>
        </div>
    )
}

export default UserItems;

