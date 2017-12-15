// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


/**
 * @description Adds cells at table
 * @description Adds classes at cells
 */
function makeGrid() {
    $("tr").remove();
    $("td").remove();

    const sizeHeight = $("#input_height").val();
    const sizeWidth = $("#input_width").val();

    for (let i = 1; i <= sizeHeight; i++) {
        $("#pixel_canvas").append("<tr></tr>");
        $("tr").addClass("trHeight0");

        for (let j = 1; j <= sizeWidth; j++) {
            $("#pixel_canvas").append("<td></td>");
            $("td").addClass("cell");
        }
    }
}


/**
 * @description Takes color from input id = "colorPicker"
 * @returns {color} Color of input
 */
function choiceColor() {
    return $("#colorPicker").val();
}


/**
 * @description Changes background color of choiced cell
 * @param {object} tdClick it is cell
 */
function makeColor(tdClick) {
    const color = choiceColor();
    $(tdClick).css("background-color", color);
}


function deleteColor(tdDblClick) {
    $(tdDblClick).css("background-color", "white");
}


//TODO: Listenes to click on button
//TODO: Stopes default actions of brouser
//TODO: Calls function makeGrid
$("#subButton").click(function(event) {
    event.preventDefault();
    makeGrid();
});


//TODO: Listens to click on the table
//TODO: Determines the cell
//TODO: Calls function makeColor
$("table").click(function(event) {
    const target = event.target;
    if (target.tagName != "TD") return;
    makeColor(target);
});


//TODO: 
$("table").dblclick(function(event) {
    const target = event.target;
    if (target.tagName != "TD") return;
    deleteColor(target);
});
