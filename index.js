//shout and whisper functions
function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
//logShout and logWhisper functions
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
//Create new combined function that returns conditional data with the context that... 
//Your roommate is very into their music, so whispering can be a bit difficult, 
//but they'll always hear you if you say, "Let's have dinner together!"
function sayHiToHeadphonedRoommate(string) { 
    if (string === string.toUpperCase()) {
        return("YES INDEED!")
    }
   else if(string === "Let's have dinner together!"){
    return("I would love to!")
   }
   else return("I can\'t hear you!");
}
// CLI follow up
const string = "Hello!";

console.log(string);
console.log(string.toUpperCase());

console.log(string === string.toUpperCase());