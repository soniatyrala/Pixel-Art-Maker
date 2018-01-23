function makeGrid() {

    let rows = $('#input_height').val();
    let cols = $('#input_width').val();
    let table = $('#pixel_canvas');
    const clearBtn = $("#clearBtn");

    table.empty();

    //creates rows
    for (var i = 0; i < rows; i++) {
        table.append('<tr></tr>');
        //creates columns
        for (var j = 0; j < cols; j++) {
            table.children().last().append("<td></td>");
        }
    }

    // one click to apply color to cell
    $("td").click(function () {
        var color = $("#colorPicker").val();
        $(this).css("background-color", color);
    });

    // double click reset color
    $("td").dblclick(function () {
        var color = $("#colorPicker").val();
        $(this).css("background-color", "white");
    });

    // display clear button
    clearBtn.css('display', 'inline');

    // clear the grid
    clearBtn.click(function () {
        listd = $("#pixel_canvas td ");
        listd.css("background-color", "white");
    });
}

//OUTSIDE THE FUNCTION MAKEGRID
//listens to submit form sizePicker
$(document).ready( function(){
$('#sizePicker').submit(function (e) {
    e.preventDefault(); // prevents the refresh page
    makeGrid();
});
});

