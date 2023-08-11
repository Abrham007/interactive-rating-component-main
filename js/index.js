$("#rating-button > button").on("click", function () {
  $("#rating-button > button").removeClass("active");
  $(this).addClass("active");
  var num = $(this).text();
  $(".submit-btn").on("click", function () {
    $(".rate").text("You selected " + num + " out of 5");
    $("#rating-container").css("display", "none");
    $("#thankyou-container").css("display", "inline-block");
  });
});
