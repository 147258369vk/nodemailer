var nodemail=require('nodemailer');
var session = require('express-session');

var transport = nodemail.createTransport({
  service:'gmail',
// smtp:'smtp.gmail.com',
// port:'527',
  auth:{
      user:'sebizsfs@gmail.com',
      pass:'Sebiz123456#'
  }  
});



module.exports.openPage=(req,res)=>{
    res.sendFile(__dirname+"/views/form.html");
}


module.exports.sendingEmails=(req,res)=>{
    var mailOptions={
        from:"sebizsfs@gmail.com",
        to:req.body.to,
        subject:req.body.subject,
        message:req.body.msg,
        // attachments:{
        //     path:''
        // }
    }
    transport.sendMail(mailOptions,(err)=>{
        if(err)
        {console.log("Error in sending emails" +err);}
        else
        {
            console.log("Mail sent");
        }
    })

}


//methods for accessing login page

module.exports.loginpage=(req,res)=>{
    res.sendFile(__dirname+"/views/login.html");
}


module.exports.login=(req,res)=>{
    req.session.user = req.body.username;

    res.sendFile(__dirname+"/views/profile.html");
}

module.exports.profilePage=(req,res)=>{
    res.send("Welcome " +req.session.user);
}