import  Express  from "express";

const app = Express();
app.use(() => {
    console.log("Hello")
})

app.listen(4000)