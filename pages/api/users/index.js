const { createUser, getUsers } = require("../../../models/user");

async function handler(req, res) {
  if (req.method === "POST") {
    const { firstname, lastname, city, description } = req.body;
    console.log("mes bodyyyy : ", req.body);
    const user = await createUser(req.body);
    return res.status(201).send(user);
  } else if (req.method === "GET") {
    const users = await getUsers();
    return res.status(201).send(users);
  }
}

export default handler;
