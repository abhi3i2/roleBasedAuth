/**
 * Section.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


    dontUseObjectIds: true,

    sectionId:{
          collection:"questions",
          via:"sectionId"

     },
     sectionName:{
            type:"string",
            required:true
     },
     isActive:{
            type:"boolean",
            required:true
     }

    },
  connection:'MongoDB',

sectionsOfQuestionsAvialable:function(input,cb){

    //if(input){

       console.log('inside of this block 1')

      Section.findOne({sectionName:input.sectionName}).exec(function(err,sectionObject){

        //if(err) return cb(err);

            console.log('inside of this block 2')

        if(!sectionObject || sectionObject == undefined){

          return cb({message: "Invalid type or you have given wrong inputs", status: 400});

        }else{

          return cb(null,sectionObject)
        }
      })
   // }cb(err)

  },
  sectionsOfQuestionsCreate:function(input,cb){

     //some specific database opearations

       Section.create(input).exec(function(err,result){

            if(!result || result == undefined){

            cb({message: "Invalid type or you are too drunk to select a type"});

         }else{
               cb(null,result)
         }
       });

  }

};
