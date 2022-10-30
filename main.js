const minAge = 18;
const maxAge = 35;
let age;

function displayMsg(msg) {
    alert(msg);
}
do {
    age = prompt("what is your age?");
    age = Number.parseInt(age);
    
    if (age < minAge) {
        displayMsg("you are too young");
    } else if (age > maxAge) {
        displayMsg("you are too old");
    } else {
        displayMsg( "hi  " +  prompt(" what is your name?") + "welcome to the party!" );
    }
} while(confirm("is there anyone else"));
