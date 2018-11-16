/**
 * DifficultyController
 *
 * @description :: Server-side logic for managing difficulties
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

difficultyLevelSelection:function(req,res){

	let input=req.body

	 // if(input){

      Difficulty.difficultyLevelFinder(input,function(err,difficultyObject){

         if(!err && difficultyObject){

              return res.json(difficultyObject);

			    }else{

						return res.json(err)

					}
	    });
    //}return res.json(err)
},


difficultyLevelCreate:function(req,res){

   let input=req.body;

    // if(req.body){

        Difficulty.difficultyLevelCreate(input,function(err,difficultyObject){

           if(!err && difficultyObject){

           res.json(difficultyObject)

         }else{
					 res.json(err);
				 }
       });
//  }
}
};
