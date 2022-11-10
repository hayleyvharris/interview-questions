import { range } from 'lodash';

enum Roles {
    USER = 'user',
    ADMIN = 'admin',
}

const users = [
    {
        name: 'admin',
        email: 'admin@example.com',
        username: 'admin',
        bio: 'Hello I am Admin',
        role: Roles.ADMIN,
    },
    ...range(5).map((i: number) => (
        {
            name: `user ${i}`,
            email: `user${i}@example.com`,
            username: `user${i}`,
            bio: `Hello I am User ${i}`,
            role: Roles.USER,
        }
    )),
];

export default users;