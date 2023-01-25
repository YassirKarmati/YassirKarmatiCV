let userModel= require('../models/user.js')              

let authGuard = async(req,res,next)=>{      

    let user = await userModel.findOne({_id: req.session.userId})

    if (user) {
        next();
    }else{
        res.redirect('/home');
    }
}

module.exports = authGuard