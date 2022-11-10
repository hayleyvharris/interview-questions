import { isEmpty, orderBy } from 'lodash';
import { useState } from 'react';

import User from './User';

const UserList = (props: any) => {
    let { users } = props;

    const [searchInput, setSearchInput] = useState('');
    const [nameSortDirection, setNameSortDirection] = useState('asc');

    const handleSearch = (e: any) => {
        setSearchInput(e.target.value);
    };
    
    if (!isEmpty(searchInput)) {
        // @ts-ignore
         users.filter(({ name, email, username }) => (
            name.match(new RegExp(searchInput, 'gi')) ||
            email.match(new RegExp(searchInput, 'gi')) ||
            username.match(new RegExp(searchInput, 'gi'))
        ));
        console.log('filtered users', users);
    }

    const handleNameSort = () => {
        if (nameSortDirection === 'asc') setNameSortDirection('desc');
        else setNameSortDirection('asc');
    }

    // @ts-ignore
    users = orderBy(users, 'name', nameSortDirection);

    return (
        <div className="w-full">
            <input
                className="flex flex-row self-end mb-5 border rounded border-gray-300"
                type="text"
                placeholder="Search"
                onChange={handleSearch}
                value={searchInput}
            />
            <div className="flex flex-row justify-between mb-5">
                <div>Name <button onClick={handleNameSort}>⇅</button></div>
                <div>Email</div>
                <div>Username</div>
                <div>Role</div>
                <div>Bio</div>
            </div>
            {users.map((user: any) => <User user={user}/>)}
        </div>
    );
};

export default UserList;