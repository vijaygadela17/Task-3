const express = require('express')
const app = express()

app.get("/app", (req, res) => {
    res.json({"users": ["Some Commands in React JS:-","npx create-react-app","node server.js","npm start","npm run dev","npm install -g",
"I tag peple to do this======","Harish05","Koti15","Dinesh36","Charan51","Ashish18","Jp26"]})
})

app.listen(5000,() =>{console.log("server started on port 5000")})