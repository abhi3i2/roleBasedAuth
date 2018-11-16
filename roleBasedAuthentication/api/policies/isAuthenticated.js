/**
 * isSuperAdmin
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {
	console.log(req)
console.log(req.get('role'));
console.log(req.get('x-auth-token'));
	if (req.get('role')=='Super admin'||req.get('role')=='Admin') {
console.log('role approved')
    res.send(200,"sucessful")
		return next();
	}

	return res.forbidden({message:'You are not permitted to perform this action', status: 403});
};
