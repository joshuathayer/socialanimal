# socialanimal

socialanimal is a framework for abstracting simple social relationship queries across various providers (Twitter, Facebook, etc).

### Example

    var socialanimal = require('socialanimal') ,
        TwitterProvider = require('socialanimal-twitter').Provider;

    var social = socialanimal.use(new TwitterProvider({
      user_id: 619833
    }));

    social.followers(function(error, followers) {
      console.log("user's followers:");
      console.log(util.inspect(followers));
    });
