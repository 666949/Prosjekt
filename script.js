src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js">


function openBtn() {
    if ($(window).width() < 400) {
        document.getElementById("leftMenu").style.width = "100%";
    } else {
        document.getElementById("leftMenu").style.width = "250px";
    }
}
function closeBtn() {
    document.getElementById("leftMenu").style.width = "0";
}
