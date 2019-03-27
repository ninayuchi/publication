$(document).ready(function() {
    $(".video").click(function(){
    	$(".horses").css("display", "inline-block");
    });
 });

$(document).ready(function() {
    $(".drag").draggable();
 });

$(document).ready(function() {
    $(".click").click(function(){
    	$("body").css("background-color", "black");
    	$("h1").css("color", "white");
    });
 });