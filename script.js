//minutes
$("#minutes-submit").click(function() {
  var minutesString = $("#minutes").val();
  var minutes = parseInt(minutesString);

  if (minutes >= 15) {
    $("#minutes-result").text("Get out of there! Fast!");
  } else if (minutes <= 14) {
    $("#minutes-result").text("Stick around a little longer...");
  }
});</script>
