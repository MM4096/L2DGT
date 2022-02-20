var i = 2;
$(document).ready(function() {
    $(".slideshow").children().hide();
    $(".slideshow").children().eq(0).show();
    const interval = setInterval(function() {

            $(".slideshow").children().eq(i - 2).fadeTo(1000, 0).hide();
            $(".slideshow").children().eq(i - 1).fadeTo(1000, 1).show();
            i++;
            if (i == 6) {
                i = 1;
            }
            console.log(i);
        
    }, 5000)
})