let connectModel= require('../models/connect')              

let authGuard = async(req,res,next)=>{              
    let user = await connectModel.findOne({_id: req.session.userId})
    if (user) {
        next()
    }else{
        res.redirect('/projects')
    }
}

module.exports = authGuard