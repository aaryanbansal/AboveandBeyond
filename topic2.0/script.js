// Update color of the selected light
$("#color-select").change(function() {
    var light = $("#light-select").val();
    var color = $("#color-select").val();
    $("#light" + light).css("background-color", color);
  });
  
  // Display the color of each light
  $("#light1").css("background-color", "#ff0000");
  $("#light2").css("background-color", "#00ff00");
  $("#light3").css("background-color", "#0000ff");
  