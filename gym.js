const express = require("express")
const path = require("path")
const fs=require("fs")
const app = express();
const port = 3000;
//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))//or serving static files


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.set("view engine", "pug")//set the template engine as pug
app.set("views", path.join(__dirname, "views"))//set the views directory

app.get("/", (req, res) => {
    const params={"title":"gym form" , "content":"this is my first pug app"}
   res.status(200).render('index.pug',params);
})
app.post('/',(req,res)=>{
   Name=req.body.name;
   age=req.body.age;
   address=req.body.address;
   more=req.body.more;
   gender=req.body.gender;
   const output=`The name of the candidate is ${Name} aged ${age}.The gender is ${gender} and address is ${address},more info about the candidate is ${more}`
   fs.writeFileSync('data.txt',output)
   const params={"message":"Your data has been saved successfully"}
   res.status(200).render('index.pug',params);
})
app.listen(port, () => {
   console.log(`The application has started successfully on port ${port}`);
})