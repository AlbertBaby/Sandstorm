var message:string ="Hellow World" 
console.log(message)

function welcomeUser(person:Person):string{
    console.log(`Hey ${person.firstName} ${person.lastName}`)
    return String("Thanks")
}

const jacob={
    firstName : "Jason",
    lastName  : "Jonas"
};

welcomeUser(jacob);

interface Person{
    firstName:string,
    lastName : string;
}

var name4:string = "Albert";
var name1:string;
var name2 = "Punnorkodan";
var name3 ;