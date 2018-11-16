/**
 * SectionController
 *
 * @description :: Server-side logic for managing sections
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

selectQuestionsSection:function(req,res){
    let input=req.body;
		  //if(req.body){
				  Section.sectionsOfQuestionsAvialable(input,function(err,sectionObject){
								 if(!err && sectionObject){
             	  return res.json(sectionObject)
              } return res.json(err)
						 })
			//}return res.json(err)
},

selectQuestionsCreate:function(req,res){

   let input=req.body;

    // if(req.body){

        Section.sectionsOfQuestionsCreate(input,function(err,result){

           if(!err && result){

           return res.json(result)

         }else{
         return res.json(err)
        }
       });

  //}return res.json(err)
}

};
