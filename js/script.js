$('.a1').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#oclube').offset().top }, 1000);
    e.preventDefault();
});
$('.a2').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#premki').offset().top }, 1000);
    e.preventDefault();
});
$('.a3').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#photki').offset().top }, 1000);
    e.preventDefault();
});
$('.a4').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#compi').offset().top }, 1000);
    e.preventDefault();
});
$('.a5').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#price').offset().top }, 1000);
    e.preventDefault();
});
$('.a6').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 1000);
    e.preventDefault();
});
$('.toTop').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#jakor').offset().top }, 1000);
    e.preventDefault();
});
$('.aa1').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#oclube').offset().top }, 1000);
    $('#delete_class').removeClass('modal-menu_active')
    $('#mob-menu').removeClass('mob-menu_active')
    e.preventDefault()
});
$('.aa2').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#premki').offset().top }, 1000);
    $('#mob-menu').removeClass('mob-menu_active')
    $('#delete_class').removeClass('modal-menu_active')
    e.preventDefault();
});
$('.aa3').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#photki').offset().top }, 1000);
    $('#mob-menu').removeClass('mob-menu_active')
    $('#delete_class').removeClass('modal-menu_active')
    e.preventDefault();
});
$('.aa4').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#compi').offset().top }, 1000);
    $('#mob-menu').removeClass('mob-menu_active')
    $('#delete_class').removeClass('modal-menu_active')
    e.preventDefault();
});
$('.aa5').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#price').offset().top }, 1000);
    $('#mob-menu').removeClass('mob-menu_active')
    $('#delete_class').removeClass('modal-menu_active')
    e.preventDefault();
});
$('.aa6').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 1000);
    $('#mob-menu').removeClass('mob-menu_active')
    $('#delete_class').removeClass('modal-menu_active')
    e.preventDefault();
});
$('.mob-menu').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('mob-menu_active')
    $('.modal-menu').toggleClass('modal-menu_active')
})