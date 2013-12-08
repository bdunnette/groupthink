Meteor.methods({
  entryValidateSignupCode:function(signupCode){
  	check(signupCode || "", String);

    return true;
  },
  accountsCreateUser: function(username, email, password){
  	check(username, String);
  	check(email, EmailPattern);
  	check(password, PasswordPattern);

    //Default to gravatar
    var avatar = "http://www.gravatar.com/avatar/" + Crypto_MD5(email);

    Accounts.createUser({
            username: username,
            email: email,
            password: password,
            profile : {
              username: username,
              name: username,
              avatar: avatar
            }
    });
    return true;
  }
});