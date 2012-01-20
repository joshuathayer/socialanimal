var Provider = require('./provider');

function SocialAnimal() {
  this._key = 'socialanimal';
  this._providers = {};
};

SocialAnimal.prototype.use = function(provider) {
  var name = provider.name;
  this._provider = provider;
  if (!name) throw new Error('providers must have a name');

  return this;
}

SocialAnimal.prototype.friends = function(cb) {
  if (!this._provider) throw new Error('socialanimal must have a provider');
  this._provider.friends(cb);
};

SocialAnimal.prototype.followers = function(cb) {
  if (!this._provider) throw new Error('socialanimal must have a provider');
  this._provider.followers(cb);
};

exports = module.exports = new SocialAnimal();
exports.version = '0.0.1';
exports.SocialAnimal = SocialAnimal;
exports.Provider = Provider;
