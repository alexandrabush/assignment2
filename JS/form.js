function validateForm() {
    var x = document.forms["pizzaForm"]["crust"].value;
    if (x == "") {
        alert("Crust type must be selected");
        return false;
    }

    var x = document.forms["pizzaForm"]["sauce"].value;
    if (x == "") {
        alert("Sauce type must be selected");
        return false;
    }

    var x = document.forms["myForm"]["cheese"].value;
    if (x == "") {
        alert("Cheese type must be selected");
        return false;
    }
}

