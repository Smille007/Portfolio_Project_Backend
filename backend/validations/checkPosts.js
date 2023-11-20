const checkTitle = (req, res, next) => {
    if (req.body.title){
   return next()
    }else{
        res.status(400).json({error: 'Title is required'})
    }
}
const checkDescription = (req, res, next) => {
    if (req.body.description){
    return next()
    }else{
        res.status(400).json({error: 'Description can not be empty'})
    }
}
  
const checkImg = (req, res, next) => {
    if (req.body.img){
    return next()
    }else{
        res.status(400).json({error: 'Img can not be empty'})
    }
}
                  
    const checkBoolean = (req, res, next) =>{
        const registration_confirmed = req.body.registration_confirmed
        if(typeof registration_confirmed === 'boolean'){
            next()
        }else{
            res.status(400).json({error:"Registration confirmation must be type boolean"})
        }
    }
    
    
    
    module.exports = {checkTitle, checkDescription, checkImg, checkBoolean}