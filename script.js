let femaleName=['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

let maleName=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']

let daysOfWeek=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


function calculateDate(){
var dd= parseInt(document.getElementById('day').value);
var mm= parseInt(document.getElementById('month').value);
var yy= parseInt(document.getElementById('year').value);
var female=document.getElementById('gender').value;
var male=document.getElementById('gender').value;

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
    alert("Your Name is " + maleName[0]);
}else if (Math.abs(output) == 1 && gender === "male") {
    alert("Your Name is " + maleName[1]);
}else if (Math.abs(output) == 2 && gender === "male") {
    alert("Your Name is " + maleName[2]);
}else if (Math.abs(output) == 3 && gender === "male") {
    alert("Your Name is " + maleName[3]);
}else if (Math.abs(output) == 4 && gender === "male") {
    alert("Your Name is " + maleName[4]);
}else if (Math.abs(output) == 5&& gender === "male") {
    alert("Your Name is " + maleName[5]);
}else if (Math.abs(output) == 6 && gender === "male") {
    alert("Your Name is " + maleName[6]);
}else if (Math.abs(output) == 0 && gender === "female") {
    alert("Your Name is " + femaleName[0]);
}else if (Math.abs(output) == 1 && gender === "female") {
    alert("Your Name is " + femaleName[1]);
}else if (Math.abs(output) == 2 && gender === "female") {
    alert("Your Name is " + femaleName[2]);
}else if (Math.abs(output) == 3 && gender === "female") {
    alert("Your Name is " + femaleName[3]);
}else if (Math.abs(output) == 4 && gender === "female") {
    alert("Your Name is " + femaleName[4]);
}else if (Math.abs(output) == 5 && gender === "female") {
    alert("Your Name is " + femaleName[5]);
}else if (Math.abs(bornDay) == 6 && gender === "female") {
    alert("Your Name is " + femaleName[6]);
}else {
    alert("inputs required")
}


};
var dayOfBirth= parseInt(cc/4-2*cc-1+(5*yy))