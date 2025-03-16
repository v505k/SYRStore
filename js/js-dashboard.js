$(window).load(function() {
    $(".se-pre-con").fadeOut("slow");
});


// custom menu
$(".nav.menu-shortcut").click(function() {
    $('.nav.menu-shortcut').slideUp(400);
    $('.nav.menu-full').slideDown(400);
});


$(document).on('click', '.browse', function(){
    var file = $(this).parent().parent().parent().find('.file');
    file.trigger('click');
});

$(document).on('change', '.file', function(){
    $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
});


$(document).on('click', '#section_controllers', function(){
    var section = '#' + $(this).data('section');


    if ( $(section).css('display') == 'none' ){
        $(section).slideDown(400);
        $(this).find('.fa-arrow-down').attr('class', 'fa fa-arrow-up options');
    }
    else {
        $(section).slideUp(400);
        $(this).find('.fa-arrow-up').attr('class', 'fa fa-arrow-down options');
    }
});


function send_request(url) {
    $.get(url, function() {})
    .done(function() {})
    .fail(function() {})
    .always(function() {});
}
