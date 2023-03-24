const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = process.argv.slice(2)[0];

bcrypt.genSalt(saltRounds, function (_, salt) {
  bcrypt.hash(password, salt, function (_, hash) {
    console.log(hash);
  });
});