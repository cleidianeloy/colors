  $('.select-container button').on('click', function () {
    const color = $(this).attr("data-color");
    const colorsContainer = $('.colors-container');

    $(this).siblings(".select").removeClass("select");
    $(this).addClass("select");

    colorsContainer.addClass("transition");
    
    setTimeout(function () {
      $('main').attr('class', color);
      colorsContainer.removeClass('transition');
    }, 500);
})