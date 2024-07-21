import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
        username,
        password,
        firstName,
        lastName
    },
    select:{
        id:true,
        username:true,
        password:true
    }
  })
  console.log(res);
}

insertUser("admin2", "123456", "darsh1", "garala1")