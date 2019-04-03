/* fonction anonyme immédiate
ou immediately invoked function expression
ou iides
permet d'isoler le code et donc les variables


*/

(function(){
    //code ici
console.log("hello dans iifes");
var i = 3;
})();


/* fonction anonyme qui est affecté à une variable
*/
var hello = function () {
    console.log("hello")
}
hello ();
