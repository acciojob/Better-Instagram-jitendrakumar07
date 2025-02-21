//your code here
document.addEventListener("DOMContentLoaded", function() {
  // Set each div's inline background image from its computed style so swapping works
  const images = document.querySelectorAll(".image");
  images.forEach(img => {
    const computedBg = window.getComputedStyle(img).backgroundImage;
    img.style.backgroundImage = computedBg;
  });
  
  const draggables = document.querySelectorAll(".image");

  draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", dragStart);
    draggable.addEventListener("dragover", dragOver);
    draggable.addEventListener("drop", drop);
  });

  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function drop(e) {
    e.preventDefault();
    const sourceId = e.dataTransfer.getData("text/plain");
    const sourceElem = document.getElementById(sourceId);
    const targetElem = e.currentTarget;
    if (sourceElem === targetElem) return;
    
    // Swap the inline background images between the source and target elements
    const sourceBg = sourceElem.style.backgroundImage;
    const targetBg = targetElem.style.backgroundImage;
    sourceElem.style.backgroundImage = targetBg;
    targetElem.style.backgroundImage = sourceBg;
  }
});
