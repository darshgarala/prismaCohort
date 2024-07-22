import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodo(userId:number){
    const res = await prisma.todo.findFirst({
        where:{userId},
    })
    console.log(res)
}

getTodo(1)