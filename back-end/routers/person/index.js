const express = require("express");
const axios = require("axios");
const router = express.Router();
const apiBase = "https://jsonplaceholder.typicode.com";

const requestGetUsers = async () => {
  const response = await axios.get(`${apiBase}/users`);
  if (response.data) {
    return response.data;
  }
  return [];
};

router.get("/", (req, resp) => {
  const resultApi = requestGetUsers();
  const users = [];

  resultApi.then((data) => {
    data.filter((use) => {
      users.push({
        id: use.id,
        name: use.name,
        username: use.username,
        email: use.email,
      });
    });
    users.splice(5, 5);
    resp.status(200).send(users);
  });
});

module.exports = router;
