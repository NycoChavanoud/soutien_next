import db from "../lib/prisma";

export async function seed() {
  await db.user.deleteMany();
  await db.user.create({
    firstname: "Hello",
    lastname: "World",
    email: "hello.world@gmail.com",
    clearPassword: "azertyuiop",
    city: "Lyon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facilis exercitationem laborum molestias natus reprehenderit earum vero non, neque minus at aut commodi recusandae possimus amet delectus? Beatae, tempora quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facilis exercitationem laborum molestias natus reprehenderit earum vero non, neque minus at aut commodi recusandae possimus amet delectus? Beatae, tempora quae!",
  });
}

seed();
