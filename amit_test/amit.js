

const express = require("express");
const mongoose = require("mongoose");
const newuser = require("./amit.json");

const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/web11")
}


const userSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    first_name:{type:String,required:true},
    last_name:{type:String,required:false},
    email:{type:String,required:true},
    gender:{type:String,required:true},
})
const User = mongoose.model("user", userSchema);

const postSchema = new mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    author:{type:mongoose.Schema.Types.ObjectId, ref:"user",required:true},
    tags:[{type:mongoose.Schema.Types.ObjectId,ref:"tag",required:true}],
},{
    versionKey:false,
    timestamps:true
})

const   Post = mongoose.model("post",postSchema);


const commentSchema = new mongoose.Schema({
    body:{type:String,required:true},
    post:{type:mongoose.Schema.Types.ObjectId,ref:"post",required:true}
},{
    versionKey:false,
    timestamp:true
})

const Comment = mongoose.model("comment",commentSchema)

const tagSchema = new mongoose.Schema({
    name:{type:String,required:true},
    //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
},{
    versionKey:false,
    timestamps:true,
})


const Tag = mongoose.model("tag",tagSchema)

const app = express();
app.use(express.json());

app.get("/users", async  (req,res) => {
    const user = await User.create(req.body)
    return res.send(newuser);
    
})

app.post("/post",async(req,res)=>{
    const post = await Post.create(req.body);
    return res.status(201).send({post});
})

app.get("/posts",async(req,res)=>{
    const posts = await Post.find().lean().exec();
    return res.status(200).send({posts})
})

app.get("/post/:id",async(req,res)=>{
    const post = await Post.findById(req.params.id).lean().exec();
    return res.status(200).send({post});
})

app.patch("/post/:id",async (req,res)=>{
    const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(200).send({post});
})


app.delete("/post/:id",async (req,res)=>{
    const post = await Post.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({post});
})

///-----------------------------------------------------------


app.post("/comments",async (req,res)=>{
    const comment = await Comment.create(req.body);
    return res.status(200).send({comment});
})

app.get("/comments", async (req,res) => {
    const comments = await Comment.find().lean().exec();
    return res.status(200).send({comments});
})

app.get("/comments/:id",async (req,res)=>{
    const comment = await Comment.findById(req.params.id).lean().exec();
    return res.status(200).send({comment});
})

app.patch("/comments/:id",async (req,res)=>{
    const comment = await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(200).send({comment});
})

app.delete("/comments/:id",async (req,res)=>{
    const comment = await Comment.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({comment});
})

//-------------------------------------------------------

app.post("/tags",async (req,res)=>{
    const tag = await Tag.create(req.body);
    return res.status(200).send({tag});
})

app.get("/tags", async (req,res) => {
    const tags = await Tag.find().lean().exec();
    return res.status(200).send({tags});
})

app.get("/tags/:id",async (req,res)=>{
    const tag = await Tag.findById(req.params.id).lean().exec();
    return res.status(200).send({tag});
})

app.patch("/tags/:id",async (req,res)=>{
    const tag = await Tag.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(200).send({tag});
})

app.delete("/tags/:id",async (req,res)=>{
    const tag = await Tag.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({tag});
})


app.listen(2345, async function(){
    await connect();
    console.log("listening on npiort");
});