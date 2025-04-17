$(document).ready(function() {
  // counting characters 
  $("#tweet-text").on("input", function() {
    const maxChars = 140;
    const currentLength = $(this).val().length;
    const remainingLength = maxChars - currentLength;

    const counter = $(this).closest("form").find(".counter");
    counter.text(remainingLength);

    // handling colour change if tweet exceeds characters limit  
    if (remainingLength < 0)  {
      counter.addClass("error");
    } else {
      counter.removeClass("error");
    }
  });
  console.log("It's working")

});