const express = require("express");
const posts = express.Router();
const{getAllPosts, getPost, createPost, deletePost, updatePost} = require('../queries/post');
const {checkTitle, checkDescription, checkImg, checkBoolean} = require('../validations/checkPosts')

posts.get("/",async (req, res) => {
    const allPosts = await getAllPosts()
    console.log(allPosts)
    if (allPosts[0]){
        res.status(200).json(allPosts)
    }else{
        res.status(500).json({error: "server error"})
    }
})

posts.get('/:id', async(req, res) => {
    const {id} = req.params
    const onePost = await getPost(id)
    if (onePost){
        res.status(200).json(onePost)
    }else{
        res.status(404).json({error:'non found'})
    } 
})

posts.post('/', checkTitle, checkDescription, checkImg, checkBoolean, async (req, res) => {
    const body = req.body
   const post = await createPost(body)
   res.status(200).json(post)
})


posts.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deletedPost = await deletePost(id)
    if(deletedPost.id){
        res.status(200).json(deletedPost)
    } else {
        res.status(404).json({ error: "Post Not Found" })
    }
})
posts.put('/:id', checkTitle, checkDescription, checkBoolean, async (req, res) => {
    const { id } = req.params
    const body = req.body
    const updatedPost = await updatePost(id, body)
    if(updatedPost.id){
        res.status(200).json(updatedPost)
    } else {
        res.status(404).json({ error: "Post Not Found" })
    }
})
posts.get("/*", (req, res) => {
    res.status(404).send("Page not found");
  });


module.exports = posts