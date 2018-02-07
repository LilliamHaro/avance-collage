$(document).ready(function() {
  $('.foto').draggable({
    addClasses: false
  });

  $('.foto').draggable(
    {
      containment: "#collage",
      opacity: 0.35,
    }
  );
});