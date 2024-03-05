function hamburgerMenu() {
    var element = document.getElementById("navigation");
    if (element.className === "navbar") {
        element.className += " responsive";
    } else {
        element.className = "navbar";
    }
  }