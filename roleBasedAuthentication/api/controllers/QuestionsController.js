/**
 * QuestionsController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//let difficultyController=require('./SectionController');
//let sectionController=require('./DifficultyController');


module.exports = {
  //get the questions by (SECTION and DIFFICULTY LEVEL )
questionBank:function(req,res){

   let input=req.body
   let data={};

      Section.sectionsOfQuestionsAvialable(input,function(err,sectionObject){

                        if(!err && sectionObject){

                                 console.log("section Object found",sectionObject)
                                 //data.push(sectionObject);
                                 data.sectionId=sectionObject.id;

                              Difficulty.difficultyLevelFinder(input,function(err,difficultyObject){

                                         if(!err && difficultyObject){

                                  console.log("difficulty Object found",difficultyObject)
                                    //data.push(difficultyObject);
                                    data.difficultyLevelId=difficultyObject.id;

                                           Options.optionsFinder(input,function(err,optionsObject){

                                            if(!err && optionsObject){

                                        console.log("options Object found",optionsObject)
                                          // data.push(optionsObject);
                                          data.optionId=optionsObject.id;

                                          data.questionName=input.questionName;

                                          data.typeName=input.typeName;

                                         console.log(data)

                                            Questions.questionCreation(data,function(err,createdObject){

                                                 console.log("inside question creation controller")

                                              console.log(createdObject)

                                                        if(!err && createdObject){

                                                     console.log(createdObject)

                                                        return res.json(createdObject)

                                                      }else{

                                                        return res.json(err)
                                                      }
                                             });
                                      }else{
                                         return res.json(err);
                                      }

                                });

                            }else{

                                 return res.json(err);
                            }

                       });

               }else{
                      return res.json(err);
               }

        });

},
viewingQuestions:function(req,res){

     let input=req.body;

     Questions.questionQuery(input,function(err,questionsObject){

          console.log("inside question query controller")

          if(!err && questionsObject){

            console.log(questionsObject)

        return res.json(questionsObject)

      }else{

        return res.json(err)

      }

   });

}

};
