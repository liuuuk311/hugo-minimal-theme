document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.getElementById("before-after-slider");
  const afterImage = document.getElementById("after-image");
  const resizer = document.getElementById("resizer");

  let isDragging = false;

  resizer.addEventListener("mousedown", function (e) {
    isDragging = true;
    e.preventDefault();
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });

  document.addEventListener("mousemove", function (e) {
    if (!isDragging) return;

    const rect = sliderContainer.getBoundingClientRect();
    let xPos = e.clientX - rect.left;

     const minX = rect.width * 0.20;
     const maxX = rect.width * 0.80;
 
     // Clamp xPos to the 20%-80% range
     if (xPos < minX) xPos = minX;
     if (xPos > maxX) xPos = maxX;

    afterImage.style.width = xPos + "px";
    resizer.style.left = xPos + "px";
  });
});
