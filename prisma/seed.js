const db = require("../lib/prisma");

async function seed() {
  await db.user.deleteMany();
  await db.user.create({
    data: {
      firstname: "Hello",
      lastname: "World",
      city: "Lyon",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facilis exercitationem laborum molestias natus reprehenderit earum vero non, neque minus at aut commodi recusandae possimus amet delectus? Beatae, tempora quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facilis exercitationem laborum molestias natus reprehenderit earum vero non, neque minus at aut commodi recusandae possimus amet delectus? Beatae, tempora quae!",
    },
  });
}

seed();

module.exports = seed;
