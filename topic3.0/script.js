// Login authentication
$("#login-form").submit(function(e) {
    e.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();
    
    if (username === "aaryan" && password === "6969") {
      window.location.href = "user1.html";
    } else if (username === "parth" && password === "1234") {
      window.location.href = "user2.html";
    } else {
      $("#login-error").text("Invalid login credentials. Please try again.");
    }
  });
  