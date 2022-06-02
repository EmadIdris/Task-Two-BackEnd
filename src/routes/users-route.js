const express = require("express");
const usersRouter = express.Router();
const { UsersTable } = require("../models/index");

usersRouter.get("/", async (req, res) => {
  try {
    const users = await UsersTable.findAll();
    res.json(users);
  } catch (error) {
    res.status(400).send(e.message);
  }
});

usersRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UsersTable.findOne({ where: { id } });
    res.json(user);
  } catch (error) {
    res.status(400).send(e.message);
  }
});

usersRouter.post("/", async (req, res) => {
  try {
    const user = await UsersTable.create(req.body);
    res.json(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

usersRouter.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await UsersTable.update(req.body, { where: { id } });
    res.send(updatedUser);
  } catch (error) {
    res.status(400).send(e.message);
  }
});

usersRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await UsersTable.destroy({ where: { id } });
    res.json(deletedUser);
  } catch (error) {
    res.status(400).send(e.message);
  }
});

module.exports = usersRouter;
