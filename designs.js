// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid() {

  $("tr").remove();
  $("td").remove();

  const sizeHeight = $("#input_height").val();
  const sizeWidth = $("#input_width").val();

  for (let i = 1; i <= sizeHeight; i++) {

    $("#pixel_canvas").append("<tr></tr");
    $("tr").addClass("trHeight0");

    for (let j = 1; j <= sizeWidth; j++) {

      $("#pixel_canvas").append("<td></td>");
      $("td").addClass("cell");

    }
  }
}


function choiceColor() {

  return $("#colorPicker").val();

};


function makeColor(tdClick) {

  const color = choiceColor();

  $(tdClick).css("background-color", color);

};


$("#subButton").click(function(event) {

  event.preventDefault();

  makeGrid ();

});


$("table").click(function(event) {

  const target = event.target;

  if (target.tagName != "TD") return;

  makeColor(target);

});

