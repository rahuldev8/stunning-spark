import bcrypt from 'bcryptjs'

const users = [
    {
      name: 'Admin User',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456', 10),
      isAdmin: true,
    },
    {
      name: 'John Doe',
      email: 'john@example.com',
      password: bcrypt.hashSync('123456', 10),
    },
    {
      name: 'William Bones',
      email: 'william@example.com',
      password: bcrypt.hashSync('123456', 10),
    },
  ]
  
  export default users