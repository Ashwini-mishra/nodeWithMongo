let express = require("express");
let app = express();
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

var Schema = mongoose.Schema;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/my_data", {
  useNewUrlParser: true,
});


const mod = mongoose.model(
  "client",
  new Schema({
    user_id:{ type: Number, required : true},
    name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true }
  })
);


app.get("/client", async (req, res) => {
    let data = await mod.find({});
    res.send(data);
    console.log("HELLLO to all");
});

app.get("/client/:id", async (req, res) => {
    let id = req.params.id;
    let data = await mod.find({ user_id :id});
    res.json(data);
    console.log("HELLLO to",id);
});

app.post('/client',async(req,res)=>{
    let data = await mod.insertMany(req.body)
    res.send("SuccessFully inserted");
})

app.put('/client/:id', async(req,res)=>{
    let id = req.params.id;
    let data = await mod.updateOne({user_id:id},req.body)
    res.send(data);
})

app.put('/client', async(req,res)=>{
    let data = await mod.updateOne(req.body)
    res.send(data);
})

app.delete('/client/:id',async(req,res)=>{
    let id = req.params.id;
    let data = await mod.deleteOne({user_id:id},req.body)
    res.send(data);
})

app.listen(8080, () => console.log("Port is running"));