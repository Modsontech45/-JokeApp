import express from "express"
import axios from "axios"
import bodyParser from "body-parser"


const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", async (req, res)=>{
res.render("index.ejs", {message: "Select your category of joke"})

})

app.post("/joke", async (req, res)=>{
    const category = req.body.category || "Any"
    try{
        const response = await axios.get(`https://v2.jokeapi.dev/joke/${category}`)
        const joke = response.data;

        let message = "";

        if (joke.type ==="single"){
            message = joke.joke
        }else if (joke.type === "twopart"){
            message = `${joke.setup} - ${joke.delivery}`
        }

       res.render("index.ejs", {message} )

    }catch(error){
        console.error(error)
        res.status(500).send("error fetching")

    }
} )



app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})




