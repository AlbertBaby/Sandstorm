var message = "Hellow World";
console.log(message);
function welcomeUser(person) {
    console.log("Hey ".concat(person.firstName, " ").concat(person.lastName));
    return String("Thanks");
}
var jacob = {
    firstName: "Jason",
    lastName: "Jonas"
};
welcomeUser(jacob);
