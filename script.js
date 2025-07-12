function login() {
  let user = document.getElementById("username").value;
  if (user === "") {
    alert("Please enter your username.");
  } else {
    localStorage.setItem("sitpUser", user);
    window.location.href = "home.html";
  }
}

function displayUser() {
  let user = localStorage.getItem("sitpUser");
  if (user) {
    document.getElementById("greeting").innerText = "Welcome, " + user + "!";
  }
}

function confirmBooking(driverName) {
  alert("Ride booked successfully with " + driverName + "!");
}

function submitFeedback() {
  let stars = document.querySelector('input[name="rating"]:checked');
  let review = document.getElementById("review").value;
  if (stars && review) {
    alert("Thanks for your feedback!");
  } else {
    alert("Please fill all fields.");
  }
}
