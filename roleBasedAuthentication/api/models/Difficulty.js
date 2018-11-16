/**
 * Difficulty.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

dontUseObjectIds: true,

    difficultyLevelId:{
      collection:'questions',
      via:'difficultyLevelId'

    },

    difficultyLevelName:{
             type:"string",
             required:true
      }

  },
connection:'MongoDB',

 difficultyLevelFinder:function(input,cb){

   //if(input.difficultyLevelName){

      Difficulty.findOne({difficultyLevelName:input.difficultyLevelName}).exec(function(err,difficultyObject){

        //if(err) return cb(err);

        if(!difficultyObject || difficultyObject == undefined){

          return cb({message: "Invalid type", status: 400});

        }else{

          return cb(null,difficultyObject);

        }

      });
    //}console.log(err)
 },

 difficultyLevelCreate:function(input,cb){

   //if(input.difficultyLevelName){

      Difficulty.create(input).exec(function(err,difficultyObject){

         if(!difficultyObject || difficultyObject == undefined){

          return cb({message: "Invalid type"});

        }else{

             return cb(null,difficultyObject)
        }

      });
   // } return cb(err)
 }

};
