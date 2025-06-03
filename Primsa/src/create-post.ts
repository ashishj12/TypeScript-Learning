import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: "Test post",
      content: "jkhbnafkjd",
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
}

main();
