var util = require('util');

/* constructor */
function Provider() {
}

/**
 * Friends
 * "Friends" is used in the Twitter sense- users the current
 * user is following.
**/
Provider.prototype.friends = function(req, options) {
  throw new Error('Provider#friends must be overridden by subclass');
}

/**
 * Followers
 * Again in the Twitter sense, users who follow the current 
 * user.
**/
Provider.prototype.followers= function(req, options) {
  throw new Error('Provider#followers must be overridden by subclass');
}

module.exports = Provider;
