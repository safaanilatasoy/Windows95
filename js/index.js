var draggableImages = document.querySelectorAll(".draggableImage");
var offsetX,
  offsetY,
  isDragging = false;

draggableImages.forEach(function (image) {
  image.addEventListener("mousedown", function (event) {
    event.preventDefault();
    var rect = this.getBoundingClientRect();
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;
    isDragging = true;
  });

  image.addEventListener("mousemove", function (event) {
    if (isDragging) {
      event.preventDefault();
      this.style.left = event.clientX - offsetX + "px";
      this.style.top = event.clientY - offsetY + "px";
    }
  });

  image.addEventListener("mouseup", function () {
    isDragging = false;
  });
});
