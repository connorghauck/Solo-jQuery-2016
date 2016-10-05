//must take the buttons and make them append boxes to the dom
//you must append color-cube+.red, .yellow, .green, .blue.
$(function(){
    $(".color-button").click(function(){
        var colour = $(this).data("color");
        if ('red' == colour){
            $('.container').append('<div class="color-cube red"></div>');
            valueRed++
            $('#red').text('Total red: ' + valueRed);
        } else if ('yellow' == colour){
            $('.container').append('<div class="color-cube yellow"></div>');
            valueYellow++
            $('#yellow').text('Total yellow: ' + valueYellow);
        } else if ('green' == colour){
            $('.container').append('<div class="color-cube green"></div>');
            valueGreen++
            $('#green').text('Total green: ' + valueGreen);
        } else if ('blue' == colour){
            $('.container').append('<div class="color-cube blue"></div>');
            valueBlue++
            $('#blue').text('Total blue: ' + valueBlue);
        }
    });
})



var valueRed = 0;
var valueYellow = 0;
var valueGreen = 0;
var valueBlue = 0;







// function redBox(){
// $('.container').append('<div class="color-cube red"></div>');
// valueRed++
// $('#red').text('Total red: ' + valueRed);
// }
//
//
// function yellowBox(){
// $('.container').append('<div class="color-cube yellow"></div>');
// valueYellow++
// $('#yellow').text('Total yellow: ' + valueYellow);
// }
//
//
// function greenBox(){
// $('.container').append('<div class="color-cube green"></div>');
// valueGreen++
// $('#green').text('Total green: ' + valueGreen);
// }
//
//
// function blueBox(){
// $('.container').append('<div class="color-cube blue"></div>');
// valueBlue++
// $('#blue').text('Total blue: ' + valueBlue);
// }
