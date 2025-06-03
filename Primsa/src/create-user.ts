import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // write prisma query

  await prisma.user.create({
    data: {
      email: "ashish@gmail.com",
      name: "Ashish Kumar",
    },
  });
}

main();
