const User = (props: any) => {
    const { user: { name, email, username, bio, role } } = props;
    return (
        <div className="flex flex-row justify-between mb-3">
            <div>{name}</div>
            <div>{email}</div>
            <div>{username}</div>
            <div>{bio}</div>
            <div>{role}</div>
        </div>
    );
};

export default User;