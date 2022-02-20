var i = 1;
$(document).ready(function() {
    while (true) {
        setTimeout(function() {
            $(".slideshow").children().hide();
            $(".slideshow").eq(i - 1).show();
            i++;
            if (i = 6) {
                i = 1;
            }
        }, 100);
        
    }
})