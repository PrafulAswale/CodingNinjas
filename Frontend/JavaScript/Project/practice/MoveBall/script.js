var objImage = null;
function init() {
    objImage = document.getElementById("ball");
    objImage.style.position = "relative";
    objImage.style.left = "0px";
    objImage.style.top = "0px";
}
function getKeyAndMove(e) {
    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 65: //left arrow key
            moveLeft();
            break;
        case 87: //Up arrow key
            moveUp();
            break;
        case 68: //right arrow key
            moveRight();
            break;
        case 83: //down arrow key
            moveDown();
            break;
    }
}
function moveLeft() {
    objImage.style.left = parseInt(objImage.style.left) - 5 + "px";
}
function moveUp() {
    objImage.style.top = parseInt(objImage.style.top) - 5 + "px";
}
function moveRight() {
    objImage.style.left = parseInt(objImage.style.left) + 5 + "px";
}
function moveDown() {
    objImage.style.top = parseInt(objImage.style.top) + 5 + "px";
}
window.onload = init;
