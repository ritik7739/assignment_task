$(document).ready(function() {
    $("#component1").resizable({
        alsoResize: "#Window-1",
        minWidth: 150,
        maxWidth: 500,
        handles: 'n, e, s, w, ne, se, sw, nw'
    });

    $("#component2").resizable({
        alsoResize: "#Window-2",
        minWidth: 200,
        maxWidth: 700,
        handles: 'n, e, s, w, ne, se, sw, nw'
    });

    $("#component3").resizable({
        alsoResize: "#Window-3",
        minWidth: 300,
        maxWidth: 900,
        handles: 'n, e, s, w, ne, se, sw, nw'
    });

    $("#Window-1, #Window-2, #Window-3").resizable({
        alsoResize: ".component",
        minWidth: 150,
        maxWidth: 900,
        handles: 'n, e, s, w, ne, se, sw, nw'
    });
});