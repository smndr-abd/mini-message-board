const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// INDEX PAGE
indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages
  });
});

// NEW MESSAGE FORM
indexRouter.get("/new", (req, res) => {
  res.render("form");
});

// HANDLE FORM SUBMISSION
indexRouter.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });

  res.redirect("/");
});

// OPEN SINGLE MESSAGE
indexRouter.get("/message/:id", (req, res) => {
  const id = req.params.id;
  const message = messages[id];

  res.render("message", {
    message: message
  });
});

module.exports = indexRouter;
