import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const accountData: Prisma.AccountCreateInput[] = [
  {
    firstName: "Hamza",
    lastName: "Ali",
    email: "hamza_ali@gmail.com",
    phone: "+923219751473",
    password: "h@mzaAli",
    birthday: "1999-01-01",
  },
  {
    firstName: "Gul",
    lastName: "Pari",
    email: "pari_gul@live.com",
    phone: "+923005564710",
    password: "gulP@ri",
    birthday: "1999-02-29",
  },
];

async function main() {
  console.log("Start seeding...");
  for (const acc of accountData) {
    const account = await prisma.account.create({
      data: acc,
    });
    console.log(`Created account with id: ${account.id}`);
  }
  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
