function validateForm() {
    var x = document.forms["pizzaForm"]["crust"].value;
    if (x == "") {
        alert("Crust type must be selected! Please pick a crust type to continue.");
        return false;
    }

    var x = document.forms["pizzaForm"]["sauce"].value;
    if (x == "") {
        alert("Sauce type must be selected! Please pick a sauce type to continue.");
        return false;
    }

    var x = document.forms["pizzaForm"]["cheese"].value;
    if (x == "") {
        alert("Cheese type must be selected! Please pick a cheese type to continue.");
        return false;
    }

    return true;
}
