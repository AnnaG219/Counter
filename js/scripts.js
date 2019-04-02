$(document).ready(function(){

  $(".formOne").submit(function(event){
    event.preventDefault();

    var countByInput = parseFloat($("#countByInput").val());
    var countToInput = parseFloat($("#countToInput").val());

    //Clear last results list
    $("#answerList").text("");

    counter(countByInput, countToInput);

  });


  function counter(countBy,countTo) {

    //Force user to enter a number to count by thats lower than the number they want to count to
    if (countBy > countTo) {
      alert("I cannot count to " + countTo + " by " + countBy + ". Please make sure Count By is lower than Count To.")

    //Force user to enter positive numbers only
    }else if(countBy < 1 || countTo < 1){
      alert("I can only count with positive numbers. Please, enter two positive integars.");
    }

    //Run the logic and display the results
    else {
      for(var index = countBy; index <= countTo; index+=countBy) {
        $("#answerList").append("<li>"+index+"</li>");
        console.log(index);
      }
    }
  }
});
