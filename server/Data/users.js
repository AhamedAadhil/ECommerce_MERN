import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ahamed Aathil",
    email: "aathil@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Reezma Jahan",
    email: "reezma@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
