const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then(()=>console.log("connection successfull"))

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats= [
    {
    from : "Ash",
    to : "Akshita",
    msg : "send me yesterday's notes",
    created_at : new Date()
    },
    {
    from : "Ayukta",
    to : "Vihan",
    msg : "all the best",
    created_at : new Date()
    },
    {
    from : "Briksha",
    to : "Arohi",
    msg : "how are you doing broskii!?",
    created_at : new Date()  
    },
    {
    from : "Kritika",
    to : "Ayan",
    msg : "let's go for a walk.",
    created_at : new Date()
    }
];

Chat.insertMany(allChats);
