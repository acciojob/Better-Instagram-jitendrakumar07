document.addEventListener("DOMContentLoaded", function() {
  const draggables = document.querySelectorAll('.draggable');
  
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('dragover', dragOver);
    draggable.addEventListener('drop', drop);
  });
  
  function dragStart(e) {
    // Store the id of the draggable element.
    e.dataTransfer.setData('text/plain', e.currentTarget.id);
  }
  
  function dragOver(e) {
    e.preventDefault(); // Allow dropping
  }
  
  function drop(e) {
    e.preventDefault();
    const sourceId = e.dataTransfer.getData('text/plain');
    const sourceElem = document.getElementById(sourceId);
    const targetElem = e.currentTarget;
    
    // If dropped on itself, do nothing.
    if (sourceElem === targetElem) return;
    
    // Get the image elements within the draggable containers.
    const sourceImg = sourceElem.querySelector('img');
    const targetImg = targetElem.querySelector('img');
    
    // Swap the src attributes.
    const tempSrc = sourceImg.src;
    sourceImg.src = targetImg.src;
    targetImg.src = tempSrc;
    
    // Optionally, swap the alt attributes.
    const tempAlt = sourceImg.alt;
    sourceImg.alt = targetImg.alt;
    targetImg.alt = tempAlt;
  }
});
