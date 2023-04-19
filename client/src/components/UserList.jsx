import React from 'react';

import { UserCardList } from './UserCardList';

export const UserList = ({ users }) => {

    // return (
    //     <div>
    //         {users.map(user => (
    //             <UserCardList key={user._id} user={user} />
    //         ))}
    //     </div>
    // );
    return (
        <div>
            {users
                .filter((user) => user.email !== "admin@gmail.com") // исключить пользователя admin
                .map((user) => (
                    <UserCardList key={user._id} user={user} />
                ))}
        </div>
    );
}