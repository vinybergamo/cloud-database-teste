import express, { json } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.use(json());

app.get("/", async (req, res) => {
  return res.status(200).json({databse: process.env.DATABASE_URL)}
})

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();

  return res.status(200).json(users);
});

app.get("/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  const user = await prisma.user.findUnique({
    where: { id },
  });

  return res.status(200).json(user);
});

app.post("/users", async (req, res) => {
  const { name } = req.body;

  const user = await prisma.user.create({
    data: {
      name,
    },
  });

  return res.status(200).json(user);
});

app.delete("/users/:id", async (req, res) => {
  const id = Number(req.params.id);

  await prisma.user.delete({
    where: { id },
  });

  return res.status(200).json({ message: "User deleted" });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
