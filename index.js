const information = require("./information");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `hello, je suis  ${information.nom} et je suis à la ${information.campus}!`
}));

