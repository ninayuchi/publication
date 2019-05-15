$(document).ready(function() {
    $(".video").click(function(){
    	$(".moo").css("display", "inline-block");
    });

    $(".drag").draggable();

    $(".click").click(function(){
    	$("body").css("background-color", "black");
    	$("h1").css("color", "white");
    });

    $(".rob").click(function(){
    	$(".pics").css("background-image", "url(U1/3.png)");
    });

    $(".circus").click(function(){
    	$(".u1-2").css("display", "inline-block");
    });

    $(".object").click(function(){
    	$(".u1-1").css("display", "inline-block");
    });

    $(".deirdre").click(function(){
    	$(".deirdre-1").css("display", "inline-block");
    });

    $(".amy").click(function(){
    	$(".amy-1").css("display", "inline-block");
    });

    $(".ryan").click(function(){
    	$(".ryan-1").css("display", "inline-block");
    });

 });

var aText = new Array(
"Next, Nina explored the defamiliarization of typing out a text message then deleting it by prototyping a keyboard that disables the delete button and automatically sends out messages after ten seconds. This forces the user to send whatever they initially typed out regardless of the consequences."
);
var iSpeed = 70; var iIndex = 0; var iArrLength = aText[0].length; var iScrollAt = 20;
 
var iTextPos = 0;
var sContents = '';
var iRow;
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

typewriter();