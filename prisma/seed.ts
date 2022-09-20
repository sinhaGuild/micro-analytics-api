import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.article.createMany({
    data: [
      {
        title: 'Picassos Blue',
        content: 'Lorem ipsum dolores met.',
        published: true,
        author: 'Picasso Pablo',
      },
      {
        title: 'Caravaggios Death II',
        content: 'Lorem ipsum dolores met.',
        published: false,
        author: 'Thomas Gage',
      },
    ],
  });
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
