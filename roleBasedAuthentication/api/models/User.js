/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')



module.exports = {

  attributes: {
    /* userName:{
           type:'string',
           required:true

     },
     userEmail:{
          type:'string',
          required:true

     },
     role:{
       type:'string',
       required:true


     }

*/
},

  connection:'MongoDB',

  hashPassword: function (values,cb) {
       bcrypt.genSalt(10, function (err,salt) {
          if(err) return cb(err);
          bcrypt.hash(values.password, salt, function (err, hash) {
             if(err) return cb(err);
             values.password = hash;
             cb(null,hash);
          })
       })
    },

    comparePassword: function(password,userObj,cb) {
       bcrypt.compare(password,userObj,function (err, match) {

          if(err) cb(err);
          if(match) {
            console.log('password matched')
            cb(null,true);
          } else {
             cb(err);
          }
       })
    },


     login:function(opts,cb) {

      User.findOne({email:opts.email},function(err,userObj) {


             if(err) return cb(err);

             if(!userObj || userObj == undefined){

               return cb({message: "Invalid email or password", status: 400});

             }else{

                User.comparePassword(opts.password,userObj.password,function(err,result){

                 if(err){
 
                    console.log('some error has occured')

                 }console.log('opts',opts)
                  console.log('userObj',userObj)
             return cb(null,{token:sailsTokenAuth.issueToken({email:userObj.email,password:userObj.password,role:userObj.role}),role:userObj.role});
                  })
                   }


           });


         },
/*
  roleValidation:function(input,cb){
       if(input.role=='Super admin'||'Admin'){
         console,log('inside role validations user model')
          return cb(null,input)
       }cb(err)
   },
   */




  addingUser:function(input,cb){
     User.findOne({input}).exec(function(err,userFound){
          if(!err && !userFound){
               User.create({input}).exec(function(err,userObject){
                 if(!err){
                     res.json(userObject)
                 }res.json(err)
               });
          }res.json(err)
     });

  },

 signup:function(input,cb){
         console.log(input)
       User.findOne({email:input.email}).exec(function(err, userFound){

            if(!err && !userFound){

                User.hashPassword(input,function(err,result){
                   if(err){

                     console.log('error has happened');

                     cb(err);

                   }

                   let payload={

                     email:input.email,

                     password:result,

                     role:input.role



                   }

                   User.create(payload).exec(function(err,userCreated){
                         if(!err && userCreated){
                            cb(null,{token:sailsTokenAuth.issueToken(payload)});
                         }else{

                          cb(err);

                        }

                    });

                })

             }else if(!err && userFound){
               cb({message: "User already exists"});
             }else{
               cb(err);
              }
             });
       }

};
