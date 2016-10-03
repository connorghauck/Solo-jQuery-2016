//must take the buttons and make them append boxes to the dom
//you must append color-cube+.red, .yellow, .green, .blue.
$(function(){})

function redBox(){
$('.container').append('<div class="color-cube red"></div>');
var value = 0;
value++
$('#red').text('Total red: ' + value);
}
// HTMLElementObject.innerHTML=text

function yellowBox(){
$('.container').append('<div class="color-cube yellow"></div>');
var value = 0;
value++
$('#yellow').text('Total yellow: ' + value);
}


function greenBox(){
$('.container').append('<div class="color-cube green"></div>');
var value = 0;
value++
$('#green').text('Total green: ' + value);
}


function blueBox(){
$('.container').append('<div class="color-cube blue"></div>');
var value = 0;
value++
$('#blue').text('Total blue: ' + value);
}
