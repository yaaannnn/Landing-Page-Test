$(document).ready(function(){
    $('#mobile-btn').click(function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-solid fa-bars fa-solid fa-xmark');
    });
});