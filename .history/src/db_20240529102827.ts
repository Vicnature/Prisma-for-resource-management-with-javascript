import {PrismaClient} from "@prisma/client"

const globalForPrisma=global as unkown as{
    prisma;PrismaClient|undefined
}

export const prisma =
globalForPrisma??
new PrismaClient({
    log:['query'],
})

if(proces)