$("document").ready(function(){
    let counter = 0;
    $("div#myDiv p").each(function(){
        counter++;
        $(this).prepend(counter + "] ");
    //code goes here 
    });

});

/*
let myPTags = document.querySelectorAll("div#myDiv p");

console.log(myPTags);
*/

/*

document.querySelector("div#myDiv").style.backgroundColor="yellow";

document.querySelector("div#myDiv").innerHTML ="Here is some new text!";
*/