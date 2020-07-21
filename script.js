//I credit w3 schools with this button scroll function
//Also w3 school gave me the complex background in CSS although I changed the colours for my scheme
$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.quiz').offset().top}, 'slow');
      return false;
    });
  });
  
//All toggles are set to unchecked to start, but some answers to the quiz are already correct in
//their unchecked state as they are true or false questions  
let correctAnswersArray = [0, 25, 0, 25];
let totalScore = [0];  

//Each checkbox result should embed html text reflecting its status
//Each check state records a score in an array to be added and embedded into html later
$("#firstBox").click(function() {
  if(this.checked){
    correctAnswersArray[0] = 25;
    $("#firstEmbed span").text(" You answered CORRECT!");
  }
  if(!this.checked){
    correctAnswersArray[0] = 0;
    $("#firstEmbed span").text(" You answered INCORRECT!");
  }
  console.log(correctAnswersArray, totalScore);
});
$("#secondBox").click(function() {
  if(this.checked){
    correctAnswersArray[1] = 0;
    $("#secondEmbed span").text(" Actually, they DO!");
  }
  if(!this.checked){
    correctAnswersArray[1] = 25;
    $("#secondEmbed span").text(" You answered CORRECT!");
  }
  console.log(correctAnswersArray, totalScore);
});
$("#thirdBox").click(function() {
  if(this.checked){
    correctAnswersArray[2] = 25;
    $("#thirdEmbed span").text(" You answered CORRECT!");
  }
  if(!this.checked){
    correctAnswersArray[2] = 0;
    $("#thirdEmbed span").text(" You answered INCORRECT");
  }
  console.log(correctAnswersArray, totalScore);
});
$("#fourthBox").click(function() {
  if(this.checked){
    correctAnswersArray[3] = 0;
    $("#fourthEmbed span").text(" But they HAVE BEEN!");
  }
  if(!this.checked){
    correctAnswersArray[3] = 25;
    $("#fourthEmbed span").text(" You answered CORRECT!");
  }
  console.log(correctAnswersArray, totalScore);
});

//A variable that adds up the sum of the array number values
const add = (a, b) =>
  a + b;


//A button click logs then embeds a percentage score on the final footer page  
$(document).ready(function() {
    $("#quizButton").click(function(){
      $("#hideMe").removeClass("hideMe");
      $( "theScore" ).empty();
      let totalScore = correctAnswersArray.reduce(add);
      $('#scoreText').html("<div id='theScore'>"+totalScore+"%!</div>");
        $('html, body').animate({scrollTop: $('div.results').offset().top}, 'slow');      
    }); 
});

$(document).ready(function() {
  $("#answers").click(function(){
      $('html, body').animate({scrollTop: $('section.layerOne').offset().top}, 'slow');      
  }); 
});

$(document).ready(function() {
  $("#bottomTop").click(function(){
      $('html, body').animate({scrollTop: $('html').offset().top}, 'slow');      
  }); 
});


