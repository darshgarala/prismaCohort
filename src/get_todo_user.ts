import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUSerWithTodo(userId:number)
{
    const res = await prisma.todo.findFirst({
        where:{
            userId:userId
        },
        select:{
            userData:true,
            title:true,
            description:true
        }
    })
    console.log(res)
}

getUSerWithTodo(1)