var femaleName=['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

var maleName=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']

var daysOfWeek=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


function calculateDate(){
var dd= parseInt(document.getElementById('day').value);
var mm= parseInt(document.getElementById('month').value);
var yy= parseInt(document.getElementById('year').value);
var nick= (document.getElementById('your').value);

var cc=(yy-1)/100+1;

var output= parseInt(cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;
if (document.getElementById('gender').checked){
    var gender='female'
}else {
    var gender='male'
}

if(dd<=0 || dd>31){
    alert("please put in a valid day")
} else if(mm<=0 || mm>12){
    alert("please put in a valid month")
} else if (Math.abs(output) == 0 && gender === "male") {
    alert("Hey! " +  nick +  " You were born on Sunday.You are " + maleName[0]);
}else if (Math.abs(output) == 1 && gender === "male") {
    alert("Hey! " +  nick +  "You were born on Monday . You are " + maleName[1]);
}else if (Math.abs(output) == 2 && gender === "male") {
    alert("Hey! " +  nick + "You were born on Tuesday . You are " + maleName[2]);
}else if (Math.abs(output) == 3 && gender === "male") {
    alert("Hey! " +  nick +  "You were born on Wednesday . You are" + maleName[3]);
}else if (Math.abs(output) == 4 && gender === "male") {
    alert("Hey! " +  nick +  "You were born on Thursday . You are " + maleName[4]);
}else if (Math.abs(output) == 5&& gender === "male") {
    alert("Hey!  " +  nick + "You were born on Friday . You are " + maleName[5]);
}else if (Math.abs(output) == 6 && gender === "male") {
    alert("Hey!" + nick + "You were born on Saturday . You are " + maleName[6]);
}else if (Math.abs(output) == 0 && gender === "female") {
    alert("Hey! "  + nick + " You were born on Sunday . You are " + femaleName[0]);
}else if (Math.abs(output) == 1 && gender === "female") {
    alert("Hey! "  + nick + " You were born on Monday . You are " + femaleName[1]);
}else if (Math.abs(output) == 2 && gender === "female") {
    alert("Hey! "  + nick + " You were born on Tuesday . You are " + femaleName[2]);
}else if (Math.abs(output) == 3 && gender === "female") {
    alert("Hey! "  + nick + " You were born on Wednesday . You are " + femaleName[3]);
}else if (Math.abs(output) == 4 && gender === "female") {
    alert("Hey! "  + nick + " You were born on Thursday . You are " + femaleName[4]);
}else if (Math.abs(output) == 5 && gender === "female") {
    alert("Hey! "  + nick + " You were born on Friday . You are " + femaleName[5]);
}else if (Math.abs(output) == 6 && gender === "female") {
    alert("Hey! "  + nick + " You were born on Saturday . You are " + femaleName[6]);
}else {
    alert("inputs required")
}


}