var express = require('express');
var router= express.Router();
var Contact = require('./models/contacts');


router.get('/contacts',(req,res,next)=>{
  Contact.find(function(err,contacts){
          res.json(contacts);
});

});

router.post('/contacts',(req,res,next)=>{
    let newContact = new Contact ({
    first_name :req.body.first_name,
    last_name :req.body.last_name,
    phone :req.body.phone

      });
    newContact.save((err,contact)=>{
    if(err){
      res.json('failed');
    }

    else{

      res.json('contact added');
    }
  });


});

router.delete('/contacts/:id',(req,res,next)=>{

Contact.remove({_id:req.params.id},function(err,result){
if(err){
  res.json(err);
}
else{
  res.json(result);
}

});

});





module.exports = router;
