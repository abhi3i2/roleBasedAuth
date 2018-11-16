/**
 * OptionsController
 *
 * @description :: Server-side logic for managing options
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

optionsCreater:function(req,res){

	let input=req.body;

	//	if(req.body){

				Options.optionsCreate(input,function(err,optionsObject){

							 if(!err && optionsObject){

							   return res.json(optionsObject)

							 }return res.json(err)

					 });

	//	}res.json(err)

},

optionsFinder:function(req,res){
  let input=req.body;
    // if(req.body){

       Options.optionsFinder(input,function(err,optionsObject){

							 if(!err && optionsObject){

                console.log('optionsobject',optionsObject)

								 return res.json(optionsObject)

							 }return res.json(err)
			 });

//}res.json(err)

}

};
