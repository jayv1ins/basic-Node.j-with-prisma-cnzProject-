const {PrismaClient, Prisma} = require("@prisma/client")
const prisma = new PrismaClient



exports.getIndex = async function(req, res) {
  const data = await prisma.user.findUnique({
    where: { id: id },
    select: {
      id: true,
      username: true,
      usertype: true,
    },
  });
  
  if (data == null) {
    res.status(404).send("User not found");
  } else {
    const { id, username, email, usertype, shift, createdAt, updatedAt } = data;
    const userData = {
      id,
      username,
      usertype,
    };
  
    res.render("index", { title: "User View", user: userData });
  }
  
};

