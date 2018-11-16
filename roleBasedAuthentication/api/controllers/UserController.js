/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	loginPage :function(req, res){
 		   console.log('dff')
 				res.view('login');
 		},

 	 signupPage:function(req,res){

 		    res.view('signup')
 	 },

 login:function(req, res) {
	 //console.log(req.bo)
//	 console.log('login request object',req.body)
	// console.log('full request object',req)
 	    if (!req.body){
     return res.send({ message:"the parameter is missing", status: 400 });
     } User.login(req.body,function(err,userObj) {

							if (!err && userObj){

             console.log('inside login function and token generated is',userObj.token);

             console.log('user object',userObj);

          //res.set({'x-auth-token':userObj.token,'role':userObj.role}).redirect('user/options')  //.('/user/options',{user:userObj.token, role:userObj.role})
           //res.header('x-auth-token',userObj.token)
					 res.set({'x-auth-token':userObj.token,'role':userObj.role})
           //res.view('performingActionPage',{user:userObj.token,role:userObj.role})
					 res.redirect('user/options');

        //res.set('role',userObj.role)

		      //optionSelector(userObj)


           } else {

              res.status(500).json(err)
           }
 	    });
 	  },

signup:function(req, res) {
 	    let input = req.body;
			console.log(input);
 	    if (input.email && input.password && input.role) {
 	      User.signup(input,function(err,userCreated) {
 	        if (!err && userCreated) {
               console.log(userCreated)
               res.view('login')
           } else {
 	          res.status(500).json(err);
 	        }
 	      });
 	    } else {
 	      res.status(400).json({ message: "Please fill input field" });
 	    }
 	  },
addingUserPage:function(req,res){

	let input=req.body;
	console.log(input)
	console.log('whole request object',req)
	// User.addUser(input,function(err,userDataCreated))
  console.log('inside of  add user')

	// render view and set headers here before sending for further authorization

  res.view('addingUser')

},


/*
roleValidationCheck:function(req,res){

   let input=req.body;
	 console.log(input)
	 User.roleValidation(input,function(err,result){
		  console,log('inside role validations user Controllers')
		 if(!err) res.view('addingUser');
		  res.json(err)
	 });



},
*/
addingUser:function(req,res){

	 let input=req.body;

   User.addingUser(input,function(err,result){
        if(err){
           console.log('some error has occured while adding the user')
				}console.log('no error has occured')

})
	 console.log('user has been added')

},

optionSelector:function(req,res){
  let input=req.body;
	console.log(req.body)
  console.log('inside of option selector')
	res.view('performingActionPage')
}

};
