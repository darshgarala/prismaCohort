import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();

async function createTodo(userId:number , title:string,description:string){
    const res = await prisma.todo.create({
        data:{
            title,
            description,
            userId
        }
    })
    console.log(res)
}

createTodo(1,"go to gym","today i am going to 10 AM gym")