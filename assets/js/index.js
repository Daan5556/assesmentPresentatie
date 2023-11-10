var image = document.getElementById("vistaLogo")

var rotated = false;

image.addEventListener('click', function() {
    rotated = !rotated
    image.style.transform = rotated ?'rotate(180deg)' : "rotate(0deg)";
});