const db = require("../lib/prisma");

module.exports.createUser = async ({
  firstname,
  lastname,
  city,
  description,
}) => {
  return await db.user.create({
    data: { firstname, lastname, city, description },
  });
};
