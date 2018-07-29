var topScroll = window.pageYOffset;
window.onscroll = function() {

    var activeScroll = window.pageYOffset;
    if(topScroll > activeScroll) {
        document.getElementById("navmenu").style.top = "0";
    } else {
        document.getElementById("navmenu").style.top = "-500px";
    }

    topScroll = activeScroll;

    }
