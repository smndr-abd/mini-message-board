### Mini Message Board

## Author
# Samandar Abdujabbarov

A simple message board application built with Express.js and EJS.

Users can:
    View all messages
    Add new messages
    Open individual message details
    
## Features

    Express server setup
    EJS templating
    Dynamic routing
    Form handling with POST requests
    Middleware using express.urlencoded()
    Dynamic message pages
    In-memory message storage
    
## Technologies Used

    Node.js
    Express.js
    EJS
    
## Project Structure

    mini-message-board/
    │
    ├── app.js
    ├── package.json
    │
    ├── routes/
    │   └── indexRouter.js
    │
    ├── views/
    │   ├── index.ejs
    │   ├── form.ejs
    │   └── message.ejs
    │
    └── public/
    
## Installation

Clone the repository:
    git clone YOUR_REPOSITORY_URL
    
Move into the project folder:
    cd mini-message-board
    
Install dependencies:
    npm install
    
## Running the App
  Start the server:
  node app.js
  Or:
  npm start
  Open your browser and visit:
  http://localhost:3000

## Routes
  Route	Method	Description
  /	GET	Display all messages
  /new	GET	Show new message form
  /new	POST	Submit a new message
  /message/:id	GET	Open message details

## Example Messages
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

## What I Learned
    This project helped practice:
    Express routing
    EJS rendering
    Passing data to templates
    Handling forms
    Middleware setup
    Dynamic URLs
    Basic backend architecture
    
## Future Improvements
  Possible upgrades:
      Store messages in a database
      Add edit/delete functionality
      Add CSS styling
      Add timestamps formatting
      User authentication
      Deploy online
      
