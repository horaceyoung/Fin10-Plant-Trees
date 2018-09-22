$(document).ready(function(){
    // Activate Carousel
    $(".carousel").carousel();
    
    // Enable Carousel Controls
    $(".carousel-control-next").click(function(){
        $(".carousel").carousel(0);
    });
    $(".carousel-control-prev").click(function(){
        $("#myCarousel").carousel("next");
    });
});