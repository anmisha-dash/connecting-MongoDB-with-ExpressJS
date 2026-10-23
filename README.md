# WhatsApp Chat Application

A simple WhatsApp-inspired chat application built using **Node.js, Express.js, MongoDB, Mongoose, and EJS**. This project demonstrates the fundamentals of CRUD operations, server-side rendering, RESTful routing, and database integration.

## Features

- **View Chats:** Display all chat messages stored in MongoDB.
- **Create Chats:** Add new messages with sender, receiver, and message content.
- **Edit Messages:** Update existing chat messages.
- **Database Integration:** Store and retrieve chat records using MongoDB and Mongoose.
- **Method Override:** Support PUT requests through HTML forms using `method-override`.
- **Dynamic Rendering:** Render pages dynamically using EJS templates.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Template Engine:** EJS
- **Middleware:** method-override
- **Frontend:** HTML, CSS

## Project Structure

```text
whatsapp/
├── models/
│   └── chat.js
├── public/
│   └── style.css
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
├── index.js
├── package.json
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd whatsapp
```

Replace `<your-repository-url>` with your GitHub repository URL.

### 2. Install Dependencies

```bash
npm install
```

If the dependencies are not already listed in `package.json`, install them using:

```bash
npm install express mongoose ejs method-override
```

### 3. Start MongoDB

Ensure MongoDB is installed and running locally. The application connects to:

```text
mongodb://127.0.0.1:27017/whatsapp
```

### 4. Run the Application

```bash
node index.js
```

Once the server starts, open:

**http://localhost:8080/chats**

## Application Routes

| Method | Route | Description |
|---|---|---|
| GET | `/` | Display the root page |
| GET | `/chats` | Display all chats |
| GET | `/chats/new` | Open the new-chat form |
| POST | `/chats` | Create a new chat |
| GET | `/chats/:id/edit` | Open the edit form |
| PUT | `/chats/:id` | Update an existing message |

## Chat Data Model

Each chat document contains the following fields:

- `from` — Name of the sender.
- `to` — Name of the receiver.
- `msg` — Message content.
- `created_at` — Date and time the message was created.

## Learning Objectives

This project was developed to practice:

- Building a web server with Express.js.
- Implementing CRUD operations.
- Connecting Node.js applications to MongoDB.
- Defining schemas and models using Mongoose.
- Using EJS for dynamic HTML rendering.
- Handling form submissions and HTTP method overriding.
- Implementing server-side routing and middleware.

## Future Improvements

- Add a delete-chat feature.
- Add user authentication and authorization.
- Improve the interface with responsive CSS.
- Add chat search and filtering.
- Display messages in chronological order.
- Add real-time messaging using Socket.IO.

## Author

Anmisha Dash
---

