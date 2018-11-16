/**
 * Section.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

dontUseObjectIds: true,

    questionsId:{
            model:'options'
     },
    questionName:{
            type:"string"

     },
     sectionId:{
            model:'section'


     },
     difficultyLevelId:{
            model:'difficulty'

     },
     typeName:{
            required:false
     },
     interviewOnly:{
            type:"boolean",
            required:false
     }
    },
    connection:'MongoDB',
/*
Questions.find().populate('sectionId').exec(err,sectionObject)
Questions.find().populate('difficultyLevelId').exec(err,difficultyObject)
Questions.find().populate('questionsId').exec(err,optionsObject)

*/
  questionCreation:function(data,cb){

      Questions.findOne({data}).exec(function(err,questionFound){

         if(!err && !questionFound){

          console.log('inside questions')

           Questions.create({data}).exec(function(err,createdObject){

         console.log("inside question creation model input")

                if(!err && createdObject){

            console.log('before the returning object')

                  return cb(null,createdObject)

                }else{
                  return cb(err)
                }
             });

         }else{

           return cb(null,{message:"question already exists"})
         }
      });

  },

questionQuery:function(input,cb){

            console.log(input)
           console.log('inside of question query 1')

          Questions.find(input).populate('sectionId').populate('difficultyLevelId').populate('questionsId').exec(function(err,populatedObject){

             console.log('inside of question query 2')


                if(!err && populatedObject){

                    return cb(null,populatedObject)

                } else{

                  return cb(err);

                }

          });

}


/*
questionCreation:function(data,cb){
//data[input1,input2,input3]
async.each(data,function(eachObject,cb){

    console.log('inside database')
    console.log(eachObject)

    Questions.create({eachObject}).exec(function(err,createdObject){

      console.log("inside question creation model input")

                   if(!err && createdObject){

                     return cb(null,createdObject)

                   }return cb(err)

        });

});
}
*/
};
