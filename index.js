import express from "express";
import env from "dotenv";

env.config();


const port = process.env.PORT;
const app = express();

app.use(express.static("public"));
app.get("/", (req, res)=> {
    res.render("./index.ejs")
})

app.get("/home", (req, res)=> {
    res.render("./index.ejs");
})

app.get("/about-me", (req, res)=>{
    res.render("./about-me.ejs")
} )


app.get("/learn-react", (req, res)=>{
    res.render("./learn-react.ejs")
} )
app.get("/learn-php", (req, res)=>{
    res.render("./learn-php.ejs")
} )
app.get("/learn-css", (req, res)=>{
    res.render("./learn-css.ejs")
} )



app.listen(port, ()=> {
    console.log(`the server is running on port ${port}`);
})
