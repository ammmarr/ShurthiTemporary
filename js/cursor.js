document.addEventListener("DOMContentLoaded", function () {
  var stickyDiv = document.getElementById("cursor");
  var links = document.querySelectorAll("a");
  // Function to update the position of the div based on mouse movement
  function moveDiv(event) {
    // Get the mouse coordinates
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Set the position of the div
    stickyDiv.style.left = mouseX - stickyDiv.offsetWidth / 2 + "px";
    stickyDiv.style.top = mouseY - stickyDiv.offsetHeight / 2 + "px";
  }

  // Add event listener for mouse movement
  document.addEventListener("mousemove", moveDiv);
  links.forEach(function (link) {
    link.addEventListener("mouseenter", function (event) {
      stickyDiv.classList.add("cursor-hovered");
    });

    link.addEventListener("mouseleave", function (event) {
      stickyDiv.classList.remove("cursor-hovered");
    });
  });
});
