const db = require('../db/dbConfig')



const getAllPosts = async () =>{
    try{
        const allPosts = await db.any("SELECT * FROM posts")
        return allPosts
    } catch(error){
return error
    }
}

const getPost = async (id) => {
    try {
        const onePost = await db.one("SELECT * FROM posts WHERE id=$1",id)
        return onePost;
    } catch (error) {
        return error
    }
    }


    const createPost = async(post) => {
        try {
            const newPost = await db.one(
                "INSERT INTO posts (title, description, img, user_id, date_time, registration_confirmed) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
                [post.title, post.description, post.img, post.user_id, post.date_time, post.registration_confirmed]
            );            
            return newPost
        } catch(error) {
            return error
        }
    }

    const deletePost = async (id) => {
        try {
            const deletedPost = await db.one("DELETE FROM posts WHERE id=$1 RETURNING *", id)
            return deletedPost
        } catch (error) {
            return error
        }
    }

    const updatePost = async (id, post) => {
        try {
            const updatedPost = await db.one(
                "UPDATE posts SET title=$1, description =$2, img=$3, date_time=$4, user_id=$5, registration_confirmed=$6 WHERE id=$7 RETURNING *",
                [post.title, post.description, post.img, post.date_time, post.user_id, post.registration_confirmed, id]
            )
            console.log(updatedPost)
            return updatedPost
        } catch (error) {
            console.log(error)
            return error
        }
    }

module.exports = {getAllPosts, getPost, createPost, deletePost, updatePost}