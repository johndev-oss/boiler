function cout(value, id) {
    var output = document.getElementById(id);
    output.innerHTML = value + '<br>';
}
function append(value, id) {
    var output = document.getElementById(id);
    output.innerHTML += value;
}
function clear(id) {
    document.getElementById(id).innerHTML = "";
}
function getval(id) {
    var value = document.getElementById(id).value;
    return value;
}
function setval(val, id) {
    var valu = document.getElementById(id);
    valu.value = val;
}
function readdata(id) {
    var value = document.getElementById(id).innerText;
    return value;
}
function css(id, property, value) {
    let element = document.getElementById(id);

    if (value === undefined) {
        return getComputedStyle(element).getPropertyValue(
            property.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
        );
    }

    element.style[property] = value;
}