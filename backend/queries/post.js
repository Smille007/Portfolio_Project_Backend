const db = require('../db/dbConfig')



const getAllPosts = async () =>{
    try{
        const allPosts = await db.any("SELECT * FROM posts")
        return allPosts
    } catch(error){
return error
    }
}
module.exports = {getAllPosts}