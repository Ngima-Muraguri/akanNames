const femalenames={'Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'}

const malenames=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']

const daysof week=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


function calculateDate(){
var dd= parseInt(document.getElementById('day').value;)
var mm= parseInt(document.getElementById('month').value;)
var yy= parseInt(document.getElementById('year').value;)
var cc=(yy-1)/100+1;

var form=document.getElementById('form')
var female=document.getElementById('fgender').value;
var male=document.getElementById('mgender').value;



if(dd<=0 || dd>31){
    alert("please put in a valid day")
} else if(mm<= || mm>12){
    alert("please put in a valid month")
}



};