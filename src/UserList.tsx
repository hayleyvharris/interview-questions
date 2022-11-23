import User from './User';

const UserList = (props: any) => {
    const { users } = props;
    return (
        <div className="w-full">
            <div className="flex flex-row justify-between mb-5">
                <div>Name</div>
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