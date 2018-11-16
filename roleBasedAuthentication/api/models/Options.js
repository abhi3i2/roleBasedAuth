/**
 * Options.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

dontUseObjectIds: true,

      optionId :{
         type:"string",
         required:true

       },
       content:{
         type:"string",
         required:true

       },
      questionsId :{
         collection:'questions',
         via:'questionsId'


       },
       correctOption:{
         type:"string",
         required:true

       }
  },
  connection:'MongoDB',


  optionsFinder:function(input,cb){

    console.log(input.optionId)

    //if(input.params){

      console.log('inside model options 1')

       Options.findOne({optionId:input.optionId}).exec(function(err,optionsObject){

        console.log('inside model options 2')


         if(err) return cb(err);

         if(!optionsObject || optionsObject == undefined){

           return cb({message: "Invalid entry"});

         }else{

           return cb(null,optionsObject)
         }

       });

     //}cb(err)
  },



  optionsCreate:function(input,cb){

    //if(input){

       Options.create(input).exec(function(err,optionsObject){

          if(!optionsObject || optionsObject == undefined){

           return cb({message: "Invalid entry"});

         }else{

           return cb(null,optionsObject)
         }
       });

    // }return cb(err)
  }

};
