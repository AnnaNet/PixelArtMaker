// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid() {

  $("tr").remove();
  $("td").remove();

  var sizeHeight, sizeWidth;

  sizeHeight = $("#input_height").val();
  sizeWidth = $("#input_width").val();

  for (let i = 1; i <= sizeHeight; i++) {
    $("#pixel_canvas").append("<tr></tr");
    $("tr").addClass("tr0");

    for (let j = 1; j <= sizeWidth; j++) {
      $("#pixel_canvas").append("<td></td>");
      $("td").addClass("cell");

    }
  }
}


$("#subButton").click(function(event) {

  event.preventDefault();

  makeGrid ();

});
