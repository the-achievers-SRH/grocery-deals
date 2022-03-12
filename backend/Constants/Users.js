import bcrypt from 'bcryptjs'

const Users = [
    {
        name: 'Admin User',
        email: 'admin@abc.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Archit',
        email: 'archit@abc.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Vivek',
        email: 'vivek@abc.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Enes',
        email: 'enes@abc.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Amrutha',
        email: 'amrutha@abc.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default Users