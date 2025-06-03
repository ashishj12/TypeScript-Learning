import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      posts: {
        deleteMany: {
          published: false,
        },
      },
    },
  });
}

main();
